from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.entities.entity_creator import EntityCreator
from CanaWebAPI.views.LogDecorator import DebugLogs
from CanaWebAPI.entities.field import validate_field
from CanaWebAPI.helper.InvalidUsage import InvalidUsage
from CanaWebAPI.service.FieldRepository import FieldRepository
from CanaWebAPI.views.auth import token_required

bp = Blueprint('fields', __name__, url_prefix='/field')

FieldRepo = FieldRepository()


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("", methods=['POST'])
@token_required
@DebugLogs
def add_field(current_user) -> str:
    if not request.json:
        raise Exception("No JSON message sent.")
    try:
        field = EntityCreator.create_field_from_json(request.json)
        if FieldRepo.create(field):
            return field.jsonify(), 201
        else:
            return jsonify({"message": "Error creating a new field."}), 400
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Error creating a new field."}), 400


@bp.route("", methods=['GET'])
@token_required
@DebugLogs
def get_all_fields(current_user) -> str:
    try:
        all_fields = FieldRepo.read_all()
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Error fetchingall fields."}), 400


@bp.route("/<field_name>", methods=['GET'])
@token_required
@DebugLogs
def get_field(current_user, field_name) -> str:
    if not field_name:
        raise Exception("No valid Name provided.")

    app.logger.info("Fetch field with Name: {}".format(field_name))
    try:
        field = FieldRepo.read_one(field_name)
        if field is None:
            return {}, 204

        return jsonify(field), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Unable to find field with Name: {}".format(field_name)}), 400


@bp.route("", methods=['PATCH'])
@token_required
@DebugLogs
def update_field(current_user) -> str:
    try:
        field = EntityCreator.create_field_from_json(request.json)
        if FieldRepo.update(field):
            return field.jsonify(), 200
        else:
            raise Exception("Failed to update field: {}".format(field.name))
    except Exception as e:
        app.logger.error("Failed to update: {}".format(e.details))
        return jsonify({"message": e.args[0]}), 400


@bp.route("/<field_name>", methods=['DELETE'])
@token_required
@DebugLogs
def delete_field(current_user, field_name) -> str:
    try:
        if not field_name:
            raise Exception("No valid Name provided.")

        app.logger.info("Delete field with Name: {}".format(field_name))

        result = FieldRepo.delete(field_name)
        if result:
            return jsonify({"message": "Deleted"}), 200
        else:
            raise Exception("Unable to delete field with id: {}".format(field_name))
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": e.args[0]}), 400

