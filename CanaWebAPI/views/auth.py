import datetime
from functools import wraps

import jwt
from flask import Blueprint, request, jsonify
from flask import current_app as app

from CanaWebAPI.views.LogDecorator import canaweb_ws_ep
from CanaWebAPI.views.base_blueprint import respond_failed, respond_success

from CanaWebAPI import bcrypt
from CanaWebAPI.service.AuthRepository import AuthRepository

bp = Blueprint('auth', __name__, url_prefix='/auth')

auth_repo = AuthRepository()


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'No Token provided!'}), 401

        try:
            code, resp = decode_auth_token(token)
            if code == 0:
                current_user = auth_repo.get_user(resp['sub'], token)
                if current_user is None:
                    return respond_failed('Token blacklisted. Please login again', response_code=401)
            else:
                return jsonify({'message': resp}), 401
        except Exception:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


def encode_auth_token(user_id) -> str:
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0,
                                                                   seconds=app.config.get('TOKEN_LIVE_SPAN', 600)),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm='HS256'
        ).decode()
    except Exception as e:
        raise e


def decode_auth_token(auth_token):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token,
                             app.config.get('SECRET_KEY'),
                             algorithms='HS256')
        # is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
        # if is_blacklisted_token:
        #     return 'Token blacklisted. Please log in again.'
        # else:
        return 0, payload
    except jwt.ExpiredSignatureError:
        return -1, 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return -2, 'Invalid token. Please log in again.'


@bp.route("login", methods=['POST'])
@canaweb_ws_ep
def login() -> (str, int):
    app.logger.info("Login started")

    post_data = request.get_json()
    username = post_data.get('email')
    password = post_data.get('password')
    app.logger.info("Provided: {} / {}".format(username, password))
    user = auth_repo.get_user(username)
    if user and bcrypt.check_password_hash(user.get('password', ''), password):
        auth_token = encode_auth_token(username)
        if auth_token:
            response_object = {
                'status': 'success',
                'message': 'Successfully logged in.',
                'auth_token': auth_token
            }
            return jsonify(response_object), 200
        else:
            return respond_failed('Could not create token.', response_code=404)
    else:
        return respond_failed('Username or password wrong.', response_code=401)


@bp.route("logout", methods=['POST'])
@token_required
@canaweb_ws_ep
def logout(current_user) -> (str, int):
    app.logger.info("Logout started")

    # Token must be there due to @token_required
    token = request.headers['x-access-token']
    if auth_repo.blacklist_user_token(current_user.get('username', None), token):
        return respond_success('Logged out.')
    else:
        return respond_failed('Failed to logout', response_code=500)


@bp.route("register", methods=['POST'])
@canaweb_ws_ep
def register() -> (str, int):
    try:
        post_data = request.get_json()
        username = post_data['email']
        password = post_data['password']

        user = auth_repo.get_user(username)
        if not user:
            msg = auth_repo.register_new_user(username, password)

            if msg is not None:
                return respond_failed(msg)
            else:
                auth_token = encode_auth_token(username)
                response_object = {
                    'status': 'success',
                    'message': 'Successfully registered.',
                    'auth_token': auth_token
                }
                return jsonify(response_object), 201
        else:
            return respond_failed('User already exists. Please Log in.', response_code=202)
    except KeyError as e:
        return respond_failed("The following attribute is missing: {}".format(e))


@bp.route("ping", methods=['GET'])
@canaweb_ws_ep
def ping() -> (str, int):
    return jsonify({'msg': 'ping'}), 200


@bp.route("pong", methods=['GET'])
@token_required
@canaweb_ws_ep
def pong(current_user) -> (str, int):
    return jsonify({'msg': 'pong', 'user': current_user.get('username', 'UNKNOWN')}), 200
