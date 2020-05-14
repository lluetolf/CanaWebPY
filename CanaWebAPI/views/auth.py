import datetime

import jwt
from flask import Blueprint, request, jsonify
from flask import current_app as app

from CanaWebAPI import bcrypt
from functools import wraps
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
                current_user = auth_repo.get_user(resp)
            else:
                return jsonify({'message': resp}), 401
        except:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


def encode_auth_token(user_id):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=app.config.get('TOKEN_LIVE_SPAN', 600)),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm='HS256'
        )
    except Exception as e:
        return e


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
        return 0, payload['sub']
    except jwt.ExpiredSignatureError:
        return -1, 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return -2, 'Invalid token. Please log in again.'


@bp.route("login", methods=['POST'])
def login() -> str:
    app.logger.info("Login started")

    try:
        post_data = request.get_json()
        username = post_data.get('email')
        password = post_data.get('password')
        app.logger.info("Provided: {} / {}".format(username, password))
        user = auth_repo.get_user(username)
        if user and bcrypt.check_password_hash(user.get('password', ''), password):
            auth_token = encode_auth_token(username)
            if auth_token:
                responseObject = {
                    'status': 'success',
                    'message': 'Successfully logged in.',
                    'auth_token': auth_token.decode()
                }
                return jsonify(responseObject), 200
            else:
                return respond_failed('Could not create token.', response_code=404)
        else:
            return respond_failed('Username or password wrong.')
    except Exception as e:
        return respond_failed("Internal issue.", response_code=500)


@bp.route("register", methods=['POST'])
def register() -> str:
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
                responseObject = {
                    'status': 'success',
                    'message': 'Successfully registered.',
                    'auth_token': auth_token.decode()
                }
                return jsonify(responseObject), 201
        else:
            return respond_failed('User already exists. Please Log in.', response_code=202)
    except KeyError as e:
        return respond_failed("The following attribute is missing: {}".format(e))
    except Exception as e:
        app.logger.error(e)
        return respond_failed('Try again', response_code=500)


@bp.route("ping", methods=['GET'])
def ping() -> str:
    return jsonify({'msg': 'ping'}), 200


@bp.route("pong", methods=['GET'])
@token_required
def pong(current_user) -> str:
    return jsonify({'msg': 'pong', 'user': current_user.get('username', 'UNKNOWN')}), 200


#
# Helper Functions
#
def respond_failed(msg, response_code=400):
    app.logger.info("No Name provided")
    return jsonify({'status': 'failed', 'message': msg}), response_code


def respond_success(msg, response_code=200):
    app.logger.info("No Name provided")
    return jsonify({'status': 'success', 'message': msg}), response_code
