from flask import current_app as app, jsonify


def respond_failed(msg, response_code=400):
    return respond_custom(msg, response_code)


def respond_success(msg):
    return respond_custom(msg, 200)


def respond_custom(msg: str, response_code: int):
    app.logger.info(msg)
    return jsonify({'status': 'success', 'message': msg}), response_code