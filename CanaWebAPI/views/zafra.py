import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

bp = Blueprint('zafras', __name__, url_prefix='/zafra')

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
#
# Zafra related endpoints
# At some stage should be extracted to a Zafra Microservice
#
@app.route("/", methods=['POST'])
def add_deduction() -> str:
    errors = validate_zafra(request)
    if errors is not None:
        logging.error(errors)
        raise InvalidUsage(errors)
    deductions.append(request.json)
    response = {"status": "ok",
                "message": "Nbr of fields: {}".format(len(deductions))}
    return jsonify(response), 200


@app.route("/", methods=['GET'])
def get_all_zafra() -> str:
    all_zafras= ZafraDB.read_all()

#    for zafra in all_zafras:
    #            errors = validate_field(zafra)
    #        if errors is not None:
    #       logging.error(errors)
    #       raise InvalidUsage(errors)

    return jsonify(all_zafras), 200
