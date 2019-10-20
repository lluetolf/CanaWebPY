# src/app/main.py:

from flask import Flask, jsonify, request

from InvalidUsage import InvalidUsage
from entities.deductions import validate_deduction
from entities.field import validate_field

fields = [
    {
        "acquisition_date": "2018-08-26",
        "cultivated_area": 5.5,
        "id": 1,
        "ingenio_id": 12345,
        "last_updated": "2018-08-26",
        "name": "Pandita",
        "owner": "Pandita",
        "size": 5.5
    },
    {
        "acquisition_date": "2015-12-28",
        "cultivated_area": 5.5,
        "id": 2,
        "ingenio_id": 54321,
        "last_updated": "2015-12-28",
        "name": "Monkey",
        "owner": "Monkey",
        "size": 5.5
    }
]

deductions = []

app = Flask(__name__)


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
   response = jsonify(error.to_dict())
   response.status_code = error.status_code
   return response



@app.route("/field", methods=['POST'])
def add_field() -> str:
    errors = validate_field(request)
    if errors is not None:
        print(errors)
        raise InvalidUsage(errors)
    fields.append(request.json)
    response = {"status": "ok",
                "message": "Nbr of fields: {}".format(len(fields))}
    return jsonify(response), 200


@app.route("/field", methods=['GET'])
def get_all_fields() -> str:
    print(fields)
    return jsonify(fields), 200


@app.route("/field/<field_id>", methods=['GET'])
def get_field(field_id) -> str:
    try:
        r = next(r for r in fields if r['id'] == int(field_id))
    except StopIteration:
        return jsonify({"message": "Unable to find field with id: {}".format(field_id)}), 400

    return jsonify(r), 200


@app.route("/deduction", methods=['POST'])
def add_deduction() -> str:
    errors = validate_deduction(request)
    if errors is not None:
        print(errors)
        raise InvalidUsage(errors)
    deductions.append(request.json)
    response = {"status": "ok",
                "message": "Nbr of fields: {}".format(len(deductions))}
    return jsonify(response), 200


@app.route("/deduction", methods=['GET'])
def get_all_deduction() -> str:
    print(deductions)
    return jsonify(deductions), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
