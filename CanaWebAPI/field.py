import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for,
    logging, jsonify)
from werkzeug.security import check_password_hash, generate_password_hash

from CanaWebAPI.entities.field import validate_field
from CanaWebAPI.helper.InvalidUsage import InvalidUsage
from CanaWebAPI.service.FieldRepository import get_field_repo

bp = Blueprint('fields', __name__, url_prefix='/field')

#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("/", methods=['POST'])
def add_field() -> str:
    if not request.json:
        raise Exception("No JSON message sent.")
    try:
        r = request.json
        field, errors = validate_field(r)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
        del r['_id']
        field = get_field_repo().create(field)
        return jsonify(field), 200
    except Exception as e:
        logging.error(e)
        return jsonify({"message": "Error creating a new field."}), 400


@bp.route("/", methods=['GET'])
def get_all_fields() -> str:
    all_fields = get_field_repo().read_all()
    return jsonify(all_fields), 200


@bp.route("/<field_id>", methods=['GET'])
def get_field(field_id) -> str:
    if not field_id:
        raise Exception("No valid FieldId provided.")

    logging.info("Fetch field with ObjectID: {}".format(field_id))
    try:
        field = get_field_repo().read_one(field_id)
    except Exception as e:
        return jsonify({"message": "Unable to find field with id: {}".format(field_id)}), 400

    return jsonify(field), 200


@bp.route("/", methods=['PATCH'])
def update_field() -> str:
    try:
        field, errors = validate_field(request.json)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
        if get_field_repo().update(field):
            return jsonify(field), 200
        else:
            raise Exception("Failed to update field: {}".format(field['_id']))
    except Exception as e:
        logging.critical("Failed to update: {}".format(repr(e)))
        return jsonify({"message": e.args[0]}), 400


@bp.route("/<field_id>", methods=['DELETE'])
def delete_field(field_id) -> str:
    try:
        if not field_id:
            raise Exception("No valid FieldId provided.")

        logging.info("Delete field with ObjectID: {}".format(field_id))

        result = get_field_repo().delete(field_id)
        if result:
            return jsonify({"message": "Deleted"}), 200
        else:
            raise Exception("Unable to delete field with id: {}".format(field_id))
    except Exception as e:
        return jsonify({"message": e.args[0]}), 400

