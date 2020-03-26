from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.LogDecorator import DebugLogs
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
        del r['_id']
        field = FieldRepo.create(field)
        return jsonify(field), 200
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


@bp.route("/<field_id>", methods=['GET'])
@DebugLogs
def get_field(field_id) -> str:
    if not field_id:
        raise Exception("No valid FieldId provided.")

    app.logger.info("Fetch field with ObjectID: {}".format(field_id))
    try:
        field = FieldRepo.read_one(field_id)
        return jsonify(field), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": "Unable to find field with id: {}".format(field_id)}), 400


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


@bp.route("/<field_id>", methods=['DELETE'])
@DebugLogs
def delete_field(field_id) -> str:
    try:
        if not field_id:
            raise Exception("No valid FieldId provided.")

        app.logger.info("Delete field with ObjectID: {}".format(field_id))

        result = FieldRepo.delete(field_id)
        if result:
            return jsonify({"message": "Deleted"}), 200
        else:
            raise Exception("Unable to delete field with id: {}".format(field_id))
    except Exception as e:
        app.logger.error("Failed: {}".format(e.details))
        return jsonify({"message": e.args[0]}), 400

