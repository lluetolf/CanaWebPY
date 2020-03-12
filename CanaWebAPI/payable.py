from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.LogDecorator import DebugLogs
from CanaWebAPI.entities.payable import validate_payable
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
        return jsonify({"message": "Error fetchingall fields."}), 400


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