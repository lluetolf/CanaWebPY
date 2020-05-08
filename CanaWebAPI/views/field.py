from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.views.LogDecorator import DebugLogs
from CanaWebAPI.entities.field import validate_field
from CanaWebAPI.helper.InvalidUsage import InvalidUsage
from CanaWebAPI.service.FieldRepository import FieldRepository

bp = Blueprint('fields', __name__, url_prefix='/field')

FieldRepo = FieldRepository()


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("", methods=['POST'])
@DebugLogs
def add_field() -> str:
    if not request.json:
        raise Exception("No JSON message sent.")
    try:
        r = request.json
        field, errors = validate_field(r)
        if errors is not None:
            app.logger.error(errors)
            raise InvalidUsage(errors)
        field = FieldRepo.create(field)
        return jsonify(field), 201
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Error creating a new field."}), 400


@bp.route("", methods=['GET'])
@DebugLogs
def get_all_fields() -> str:
    try:
        all_fields = FieldRepo.read_all()
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Error fetchingall fields."}), 400


@bp.route("/<field_name>", methods=['GET'])
@DebugLogs
def get_field(field_name) -> str:
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
@DebugLogs
def update_field() -> str:
    try:
        field, errors = validate_field(request.json)
        if errors is not None:
            app.logger.error(errors)
            raise InvalidUsage(errors)
        if FieldRepo.update(field):
            return jsonify(field), 200
        else:
            raise Exception("Failed to update field: {}".format(field['_id']))
    except Exception as e:
        app.logger.error("Failed to update: {}".format(e.details))
        return jsonify({"message": e.args[0]}), 400


@bp.route("/<field_name>", methods=['DELETE'])
@DebugLogs
def delete_field(field_name) -> str:
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

