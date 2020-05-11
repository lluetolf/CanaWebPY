from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.entities.entity_creator import check_field
from CanaWebAPI.views.LogDecorator import DebugLogs
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
@DebugLogs
def get_all_fields(current_user) -> str:
    try:
        all_fields = FieldRepo.read_all()
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return respond_failed('Error fetching all fields.', response_code=500)


@bp.route("/<field_name>", methods=['GET'])
@token_required
@DebugLogs
def get_field(current_user, field_name) -> str:
    if not field_name:
        return respond_failed("No Name provided")

    try:
        field = FieldRepo.read_one(field_name)
        if field is None:
            return {}, 204

        return jsonify(field), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Unable to find field with Name: {}".format(field_name)}), 400


@bp.route("", methods=['POST'])
@token_required
@DebugLogs
def add_field(current_user) -> str:
    if not request.json:
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
        app.logger.error("Failed: {}".format(e.details))
        return respond_failed('Error creating a new field.', response_code=500)


@bp.route("", methods=['PATCH'])
@token_required
@DebugLogs
def update_field(current_user) -> str:
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
        app.logger.error("Failed to update: {}".format(e.details))
        return respond_failed('Error updating a new field.', response_code=500)


@bp.route("/<field_name>", methods=['DELETE'])
@token_required
@DebugLogs
def delete_field(current_user, field_name) -> str:
    if not field_name:
        return respond_failed("No Name provided")

    app.logger.info("Delete field with Name: {}".format(field_name))
    try:
        if FieldRepo.delete(field_name):
            return respond_success("Deleted")
        else:
            return respond_failed('Unable to delete field with id: {}'.format(field_name))
    except Exception as e:
        app.logger.error("Failed to delete: {}".format(e.details))
        return respond_failed('Error deleting a field.', response_code=500)


def respond_failed(msg, response_code=400):
    app.logger.info("No Name provided")
    return jsonify({'status': 'failed', 'message': msg}), response_code


def respond_success(msg, response_code=200):
    app.logger.info("No Name provided")
    return jsonify({'status': 'success', 'message': msg}), response_code
