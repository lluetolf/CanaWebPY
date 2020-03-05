from flask import Flask, jsonify, request, render_template
import os
import logging
from flask_cors import CORS

from InvalidUsage import InvalidUsage
from entities.zafra import validate_zafra
from entities.field import validate_field
from service.FieldRepository import FieldRepository
from service.ZafraRepository import ZafraRepository


app = Flask(__name__)
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
# Angular and static endpoints
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
    try:
        errors = validate_field(request.json)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
        field = FieldDB.create(request.json)
        response = {"status": "ok", "message": "Field added."}
        return jsonify(field), 200
    except Exception as e:
        return jsonify({"message": "Error creating a new field."}), 400


@app.route("/field", methods=['GET'])
def get_all_fields() -> str:
    all_fields = FieldDB.read_all()
    for field in all_fields:
        errors = validate_field(field)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
    return jsonify(all_fields), 200


@app.route("/field/<field_id>", methods=['GET'])
def get_field(field_id) -> str:
    try:
        field = FieldDB.read_one(field_id)
    except Exception as e:
        return jsonify({"message": "Unable to find field with id: {}".format(field_id)}), 400

    return jsonify(field), 200


@app.route("/field", methods=['PATCH'])
def update_field() -> str:
    try:
        errors = validate_field(request.json)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
        field = FieldDB.update(request.json)
        return jsonify(field), 200
    except Exception as e:
        return jsonify({"message": "Unable to update field."}), 400


@app.route("/field", methods=['DELETE'])
def delete_field() -> str:
    try:
        errors = validate_field(request.json)
        if errors is not None:
            logging.error(errors)
            raise InvalidUsage(errors)
        field = FieldDB.delete(request.json)
        return jsonify({"message": "Deleted"}), 200
    except Exception as e:
        return jsonify({"message": "Unable to delete field."}), 400


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
