from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.entities.entity_checks import check_field
from CanaWebAPI.views.LogDecorator import canaweb_ws_ep
from CanaWebAPI.service.FieldRepository import FieldRepository
from CanaWebAPI.views.auth import token_required
from CanaWebAPI.views.base_blueprint import respond_failed, respond_success

bp = Blueprint('fields', __name__, url_prefix='/field')

FieldRepo = FieldRepository()


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("", methods=['GET'])
@token_required
@canaweb_ws_ep
def get_all_fields(current_user: str) -> (str, int):
    app.logger.debug("Call: get_all_fields by {}".format(current_user))

    all_fields = FieldRepo.read_all()
    return jsonify(all_fields), 200


@bp.route("/<field_name>", methods=['GET'])
@token_required
@canaweb_ws_ep
def get_field_by_name(current_user, field_name) -> (str, int):
    app.logger.debug("Call: get_field_by_name by {}".format(current_user))
    if not field_name:
        return respond_failed("No Name provided")

    field = FieldRepo.read_one(field_name)
    if field is None:
        return jsonify({}), 204
    else:
        return jsonify(field), 200


@bp.route("", methods=['POST'])
@token_required
@canaweb_ws_ep
def add_field(current_user) -> (str, int):
    app.logger.debug("Call: add_field by {}".format(current_user))
    field, errors = validate_field_request(request)
    if errors is not None:
        return respond_failed(errors)

    if FieldRepo.create(field):
        return jsonify(field), 201
    else:
        return respond_failed('Issues connecting to the DB.', response_code=500)


@bp.route("", methods=['PATCH'])
@token_required
@canaweb_ws_ep
def update_field(current_user) -> (str, int):
    app.logger.debug("Call: update_field by {}".format(current_user))
    field, errors = validate_field_request(request)
    if errors is not None:
        return respond_failed(errors)

    if FieldRepo.update(field):
        return jsonify(field), 200
    else:
        return respond_failed('Issues connecting to the DB.', response_code=500)


@bp.route("/<field_name>", methods=['DELETE'])
@token_required
@canaweb_ws_ep
def delete_field(current_user, field_name) -> (str, int):
    app.logger.debug("Call: delete_field by {}".format(current_user))
    if not field_name:
        return respond_failed("No Name provided")

    if FieldRepo.delete(field_name):
        return respond_success("Deleted")
    else:
        return respond_failed('Unable to delete field with id: {}'.format(field_name))


#
# Helper Functions
#
def validate_field_request(request):
    if not request.is_json:
        return None, "No JSON message sent."

    payable, error = check_field(request.json)

    if error:
        return None, 'Field validation failed. {}'.format(error)

    return payable, None

