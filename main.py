# src/app/main.py:

from flask import Flask, jsonify, request

from InvalidUsage import InvalidUsage
from entities.zafra import validate_zafra
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

deductions = [
  {
    'id': 0,
    'last_updated': '2019-10-20',
    'document_id': 2856,
    'zafra': '2018/2019',
    'transaction_date': '2019-07-30',
    'beneficiary': 'ATB',
    'expenses': {
      'avio_socas_y_resocas': 60519.26,
      'prog_de_mejoramiento': 422.76,
      'corte_y_alce': 54606.0,
      'acarreo': 42898.48,
      'gastos_de_administracion_de_cosecha': 14561.6,
      'prorrateo_paga_dominical_y_festivos': 589.4,
      'caminos_generales_y_secundarios': 578.57,
      'gastos_de_grupo': 16563.17,
      'becas': 127.11,
      'cuota_imss_trabajadores': 6975.46,
      'comite_de_produccion_y_calidad': 2539.04,
      'agrupaciones_caneras_locales': 2096.06,
      'agrupaciones_caneras_nationales': 2822.38,
      'mutualidad_canera': 598.21,
      'derivacion': 592.26,
      'prorrateo_de_cana_quedada': 249.64
    },
    'income': {
      'pre_liquidacion': 0.0,
      'liquidacion': 0.0,
      'ajuste': 0.0
    }
  }
]

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
    errors = validate_zafra(request)
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
