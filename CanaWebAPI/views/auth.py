import datetime

import jwt
from flask import Blueprint, request, jsonify
from flask import current_app as app

from CanaWebAPI.LogDecorator import DebugLogs
from CanaWebAPI.service.AuthRepository import AuthRepository

bp = Blueprint('auth', __name__, url_prefix='/auth')

auth_repo = AuthRepository()

def encode_auth_token(user_id):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=300),
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
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'


@bp.route("login", methods=['POST'])
def login() -> str:
    app.logger.info("Login started")
    post_data = request.get_json()
    try:
        username = post_data.get('email')
        password = post_data.get('password')
        app.logger.info("Provided: {} / {}".format(username, password))

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
    post_data = request.get_json()
    try:
        username = post_data['email']
        password = post_data['password']

        msg = auth_repo.register_new_user(username, password)

        if msg is not None:
            responseObject = {
                'status': 'fail',
                'message': msg
            }
            return jsonify(responseObject), 400
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

    responseObject = {
        'status': 'success',
        'message': 'Successfully registered.'
    }
    return jsonify(responseObject), 201

@bp.route("ping", methods=['GET'])
def ping() -> str:
    return jsonify({'msg': 'ping'}), 200

@bp.route("pong", methods=['GET'])
def pong() -> str:
    return jsonify({'msg': 'pong'}), 200
