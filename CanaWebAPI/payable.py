from flask import (Blueprint, jsonify)
from flask import current_app as app

from CanaWebAPI.LogDecorator import DebugLogs
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