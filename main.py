
from flask import Flask, jsonify, request, render_template
import os
import logging

from flask_cors import CORS

from CanaWebAPI.InvalidUsage import InvalidUsage
from CanaWebAPI.LogDecorator import logger
from CanaWebAPI.entities.zafra import validate_zafra
from CanaWebAPI.entities.field import validate_field
from CanaWebAPI.helper.apiencoder import APIEncoder
from CanaWebAPI.service.FieldRepository import FieldRepository
from CanaWebAPI.service.ZafraRepository import ZafraRepository


app = Flask(__name__)
app.json_encoder = APIEncoder
CORS(app)
srv = os.getenv("CANAWEB_MONGO")
FieldDB = FieldRepository(srv)
ZafraDB = ZafraRepository(srv)

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

#
# Static endpoints
#
@app.route('/')
def index():
    return render_template('index.html')


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@app.route("/field", methods=['POST'])
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
        field = FieldDB.create(field)
        return jsonify(field), 200
    except Exception as e:
        logging.error(e)
        return jsonify({"message": "Error creating a new field."}), 400


@app.route("/field", methods=['GET'])
def get_all_fields() -> str:
    all_fields = FieldDB.read_all()
    return jsonify(all_fields), 200


@app.route("/field/<field_id>", methods=['GET'])
def get_field(field_id) -> str:
    if not field_id:
        raise Exception("No valid FieldId provided.")

    logger.info("Fetch field with ObjectID: {}".format(field_id))
    try:
        field = FieldDB.read_one(field_id)
    except Exception as e:
        return jsonify({"message": "Unable to find field with id: {}".format(field_id)}), 400

    return jsonify(field), 200


@app.route("/field", methods=['PATCH'])
def update_field() -> str:
    try:
        field, errors = validate_field(request.json)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
        if FieldDB.update(field):
            return jsonify(field), 200
        else:
            raise Exception("Failed to update field: {}".format(field['_id']))
    except Exception as e:
        logger.critical("Failed to update: {}".format(repr(e)))
        return jsonify({"message": e.args[0]}), 400


@app.route("/field/<field_id>", methods=['DELETE'])
def delete_field(field_id) -> str:
    try:
        if not field_id:
            raise Exception("No valid FieldId provided.")

        logger.info("Delete field with ObjectID: {}".format(field_id))

        result = FieldDB.delete(field_id)
        if result:
            return jsonify({"message": "Deleted"}), 200
        else:
            raise Exception("Unable to delete field with id: {}".format(field_id))
    except Exception as e:
        return jsonify({"message": e.args[0]}), 400


#
# Zafra related endpoints
# At some stage should be extracted to a Zafra Microservice
#
@app.route("/zafra", methods=['POST'])
def add_deduction() -> str:
    errors = validate_zafra(request)
    if errors is not None:
        logging.error(errors)
        raise InvalidUsage(errors)
    deductions.append(request.json)
    response = {"status": "ok",
                "message": "Nbr of fields: {}".format(len(deductions))}
    return jsonify(response), 200


@app.route("/zafra", methods=['GET'])
def get_all_zafra() -> str:
    all_zafras= ZafraDB.read_all()

#    for zafra in all_zafras:
    #            errors = validate_field(zafra)
    #        if errors is not None:
    #       logging.error(errors)
    #       raise InvalidUsage(errors)

    return jsonify(all_zafras), 200

@app.route("/payable", methods=['GET'])
def get_all_payable() -> str:
    return jsonify(None), 200

#
#
# Run App
#
#
if __name__ == '__main__':
    if srv is None:
        logging.critical("MongoDB connection string not set.")
        exit(-1)

    app.run(host='0.0.0.0', port=8080)
