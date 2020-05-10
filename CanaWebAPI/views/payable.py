from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.views.LogDecorator import DebugLogs
from CanaWebAPI.entities.payable_entity import validate_payable
from CanaWebAPI.helper.InvalidUsage import InvalidUsage
from CanaWebAPI.service.PayableRepository import PayableRepository

bp = Blueprint('payables', __name__, url_prefix='/payable')

PayableRepo = PayableRepository()


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("", methods=['GET'])
@DebugLogs
def get_all_payables() -> str:
    try:
        all_fields = PayableRepo.read_all()
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return jsonify({"message": "Error fetching all fields."}), 400


@bp.route("/<payable_id>", methods=['GET'])
@DebugLogs
def get_payable(payable_id) -> str:
    if not payable_id:
        raise Exception("No valid payable_id provided.")

    app.logger.info("Fetch payable with ObjectID: {}".format(payable_id))
    try:
        payable = PayableRepo.read_one(payable_id)
        return jsonify(payable), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return jsonify({"message": "Unable to find payable with id: {}".format(payable_id)}), 400


@bp.route("", methods=['POST'])
@DebugLogs
def add_payable() -> str:
    if not request.json:
        raise Exception("No JSON message sent.")
    try:
        r = request.json
        payable, errors = validate_payable(r)
        if errors is not None:
            app.logger.error(errors)
            raise InvalidUsage(errors)
        del r['_id']
        payable = PayableRepo.create(payable)
        return jsonify(payable), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return jsonify({"message": "Error creating a new payable."}), 400


@bp.route("", methods=['PATCH'])
@DebugLogs
def update_payable() -> str:
    try:
        payable, errors = validate_payable(request.json)
        if errors is not None:
            app.logger.error(errors)
            raise InvalidUsage(errors)
        if PayableRepo.update(payable):
            return jsonify(payable), 200
        else:
            raise Exception("Failed to update payable: {}".format(payable['_id']))
    except Exception as e:
        app.logger.error("Failed to update: {}".format(repr(e)))
        return jsonify({"message": e.args[0]}), 400


@bp.route("/<payable_id>", methods=['DELETE'])
@DebugLogs
def delete_field(payable_id) -> str:
    try:
        if not payable_id:
            raise Exception("No valid payable_id provided.")

        app.logger.info("Delete payable with ObjectID: {}".format(payable_id))

        result = PayableRepo.delete(payable_id)
        if result:
            return jsonify({"message": "Deleted"}), 200
        else:
            raise Exception("Unable to delete payable_id with id: {}".format(payable_id))
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return jsonify({"message": e.args[0]}), 400