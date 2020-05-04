import datetime

import jwt
from flask import Blueprint, request, jsonify, make_response, url_for
from flask import current_app as app
from werkzeug.utils import redirect

from CanaWebAPI import bcrypt

from CanaWebAPI.service.AuthRepository import AuthRepository

bp = Blueprint('auth', __name__, url_prefix='/auth')

auth_repo = AuthRepository()

from functools import wraps


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
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=30),
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
        payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
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
                responseObject = {
                    'status': 'fail',
                    'message': 'User does not exist.'
                }
                return jsonify(responseObject), 404
    except Exception as e:
        print(e)
        responseObject = {
            'status': 'fail',
            'message': 'Try again'
        }
        return jsonify(responseObject), 500


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
                responseObject = {
                    'status': 'fail',
                    'message': msg
                }
                return make_response(jsonify(responseObject), 400)
            else:
                auth_token = encode_auth_token(username)
                responseObject = {
                    'status': 'success',
                    'message': 'Successfully registered.',
                    'auth_token': auth_token.decode()
                }
                return make_response(jsonify(responseObject)), 201
        else:
            responseObject = {
                'status': 'fail',
                'message': 'User already exists. Please Log in.',
            }
            return make_response(jsonify(responseObject)), 202
    except KeyError as e:
        app.logger.warning("The following attribute is missing: {}".format(e))
        responseObject = {
            'status': 'fail',
            'message': 'Invalid request body.'
        }
        return jsonify(responseObject), 400
    except Exception as e:
        app.logger.error(e)
        responseObject = {
            'status': 'fail',
            'message': 'Try again'
        }
        return jsonify(responseObject), 500


@bp.route("ping", methods=['GET'])
def ping() -> str:
    return jsonify({'msg': 'ping'}), 200


@bp.route("pong", methods=['GET'])
@token_required
def pong(current_user) -> str:
    return jsonify({'msg': 'pong', 'user': current_user.get('username', 'UNKNOWN')}), 200
