from jsonschema import *

zafra_schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "expenses": {
            "type": "object",
            "properties": {
                "avio_socas_y_resocas": {"type": "number"},
                "prog_de_mejoramiento": {"type": "number"},
                "corte_y_alce": {"type": "number"},
                "gastos_de_administracion_de_cosecha": {"type": "number"},
                "prorrateo_paga_dominical_y_festivos": {"type": "number"},
                "caminos_generales_y_secundarios": {"type": "number"},
                "gastos_de_grupo": {"type": "number"},
                "becas": {"type": "number"},
                "cuota_imss_trabajadores": {"type": "number"},
                "comite_de_produccion_y_calidad": {"type": "number"},
                "agrupaciones_caneras_locales": {"type": "number"},
                "agrupaciones_caneras_nationales": {"type": "number"},
                "mutualidad_canera": {"type": "number"},
                "derivacion": {"type": "number"}
            },
            "required": ["avio_socas_y_resocas", "prog_de_mejoramiento", "corte_y_alce",
                         "gastos_de_administracion_de_cosecha",
                         "prorrateo_paga_dominical_y_festivos",
                         "caminos_generales_y_secundarios", "gastos_de_grupo", "becas", "cuota_imss_trabajadores",
                         "comite_de_produccion_y_calidad",
                         "agrupaciones_caneras_locales", "agrupaciones_caneras_nationales", "mutualidad_canera",
                         "derivacion",
                         "prorrateo_de_cana_quedada"]
        },
        "income": {
            "type": "object",
            "properties": {
                "pre_liquidacion": {"type": "number"},
                "liquidacion": {"type": "number"},
                "ajuste": {"type": "number"}
            },
            "required": ["pre_liquidacion", "liquidacion", "ajuste"]
        }
    },

    "type": "object",

    "properties": {
        "id": {"type": "number"},
        "document_id": {"type": "number"},
        "zafra": {"type": "string"},
        "transaction_date": {"format": "date"},
        "beneficiary": {"type": "string"},
        "last_updated": {"format": "date"},
        "expenses": {"$ref": "#/definitions/expenses"},
        "income": {"$ref": "#/definitions/income"}
    },
    "required": ["id", "document_id", "zafra", "transaction_date", "beneficiary", "last_updated", "expenses", "income"]
}


def validate_zafra(request):
    try:
        validate(instance=request.json, schema=zafra_schema, format_checker=draft7_format_checker)
    except Exception as e:
        if hasattr(e, "message"):
            return e.message
        else:
            print(e)
            return "Unknown error occurred."
    return None
