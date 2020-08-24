from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.entities.entity_checks import check_field
from CanaWebAPI.views.LogDecorator import debug_logs
from CanaWebAPI.service.FieldRepository import FieldRepository
from CanaWebAPI.views.auth import token_required

bp = Blueprint('fields', __name__, url_prefix='/field')

FieldRepo = FieldRepository()


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("", methods=['GET'])
@token_required
@debug_logs
def get_all_fields(current_user: str) -> (str, int):
    app.logger.debug("Call: get_all_fields by {}".format(current_user))
    try:
        all_fields = FieldRepo.read_all()
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(str(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("/<field_name>", methods=['GET'])
@token_required
@debug_logs
def get_field_by_name(current_user, field_name) -> (str, int):
    app.logger.debug("Call: get_field_by_name by {}".format(current_user))
    if not field_name:
        return respond_failed("No Name provided")

    try:
        field = FieldRepo.read_one(field_name)
        if field is None:
            return jsonify({}), 204
        else:
            return jsonify(field), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(str(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("", methods=['POST'])
@token_required
@debug_logs
def add_field(current_user) -> (str, int):
    app.logger.debug("Call: add_field by {}".format(current_user))
    if not request.is_json:
        return respond_failed("No JSON message sent.")

    field, error = check_field(request.json)
    if error:
        return respond_failed('Field validation failed. {}'.format(error))

    try:
        if FieldRepo.create(field):
            return jsonify(field), 201
        else:
            return respond_failed('Issues connecting to the DB.', response_code=500)

    except Exception as e:
        app.logger.error("Failed: {}".format(str(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("", methods=['PATCH'])
@token_required
@debug_logs
def update_field(current_user) -> (str, int):
    app.logger.debug("Call: update_field by {}".format(current_user))
    if not request.json:
        return respond_failed("No JSON message sent.")

    field, error = check_field(request.json)
    if error:
        return respond_failed('Field validation failed. {}'.format(error))

    try:
        if FieldRepo.update(field):
            return jsonify(field), 200
        else:
            return respond_failed('Issues connecting to the DB.', response_code=500)
    except Exception as e:
        app.logger.error("Failed to update: {}".format(str(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("/<field_name>", methods=['DELETE'])
@token_required
@debug_logs
def delete_field(current_user, field_name) -> (str, int):
    app.logger.debug("Call: delete_field by {}".format(current_user))
    if not field_name:
        return respond_failed("No Name provided")

    try:
        if FieldRepo.delete(field_name):
            return respond_success("Deleted")
        else:
            return respond_failed('Unable to delete field with id: {}'.format(field_name))
    except Exception as e:
        app.logger.error("Failed to delete: {}".format(str(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


#
# Helper Functions
#
def respond_failed(msg, response_code=400):
    return respond_custom(msg, response_code)


def respond_success(msg):
    return respond_custom(msg, 200)


def respond_custom(msg: str, response_code: int):
    app.logger.info(msg)
    return jsonify({'status': 'success', 'message': msg}), response_code
