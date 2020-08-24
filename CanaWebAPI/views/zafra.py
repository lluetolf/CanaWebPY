from flask import (Blueprint, jsonify)
from flask import current_app as app

bp = Blueprint('zafras', __name__, url_prefix='/zafra')


#
# Zafra related endpoints
# At some stage should be extracted to a Zafra Microservice
#
@app.route("/", methods=['POST'])
def add_deduction() -> (str, int):
    response = {"status": "ok",
                "message": "Nbr of fields: {}".format(0)}
    return jsonify(response), 200


@app.route("/", methods=['GET'])
def get_all_zafra() -> (str, int):
    return jsonify({}), 200
