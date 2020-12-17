import json
from pprint import pprint
import pymongo
from jsonschema import validate, SchemaError, ValidationError, Draft7Validator


def validate_json(msg: str, exp_schema: {}) -> {}:
    """
    Args:
        msg (): JSON to be validated
        exp_schema (): schema to check against.

    Returns: True if valid else False
    """
    try:
        validator = Draft7Validator(exp_schema)
        validator.validate(msg)
    except (ValidationError, SchemaError) as e:
        if hasattr(e, "message"):
            return e.message
        else:
            print(e)
        return False
    except Exception as e:
        print("Unexpected error occured:\n{}".format(e))
        return False

    return True


#
# Schemas
# TODO: Needs to be moved to separate files.
#
field_schema = {
    "$id": "http://canaweb.app/schemas/field.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "ingenioId": {
            "type": "string",
            "pattern": "^\d+-\d+-\d+$"
        },
        "name": {
            "type": "string"
        },
        "owner": {
            "type": "string"
        },
        "size": {
            "type": "number"
        },
        "cultivatedArea": {
            "type": "number"
        },
        "acquisitionDate": {
            "type": "string"
        },
        "lastUpdated": {
            "type": "string"
        }
    },
    "required": [
        "ingenioId",
        "name",
        "owner",
        "size",
        "cultivatedArea",
        "acquisitionDate",
        "lastUpdated"
    ]
}

payable_schema = {
    "$id": "http://canaweb.app/schemas/payable.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "category": {
            "type": "string"
        },
        "subCategory": {
            "type": "string"
        },
        "pricePerUnit": {
            "type": "number"
        },
        "quantity": {
            "type": "integer"
        },
        "fieldId": {
            "type": "string"
        },
        "transactionDate": {
            "type": "string"
        },
        "documentId": {
            "type": "string"
        },
        "comment": {
            "type": "string"
        },
        "lastUpdated": {
            "type": "string"
        }
    },
    "required": [
        "category",
        "subCategory",
        "pricePerUnit",
        "quantity",
        "fieldId",
        "transactionDate",
        "documentId",
        "comment",
        "lastUpdated"
    ]
}

receivable_schema = {
    "$id": "http://canaweb.app/schemas/receivable.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Liquidiation Final",
    "description": "Follows the schema provided by the ingenio.",
    "type": "object",
    "definitions": {
        "entry": {
            "type": "object",
            "properties": {
                "capital": {"type": "number"},
                "intereses": {"type": "number"},
                "total": {"type": "number"}
            },
            "required": ["capital", "intereses", "total"],
            "additionalProperties": False
        }
    },
    "properties": {
        "header": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 5
        },
        "cargos": {
            "patternProperties": {
                "": {"$ref": "#/definitions/entry"}
            }
        },
        "ingresos": {
            "type": "object"
        }
    },
    "required": [
        "header",
        "cargos",
        "ingresos"
    ],
    "additionalProperties": False
}


#
# Checks
#
field = {
    "ingenioId": "25-33-051",
    "name": "Sherlock",
    "owner": "Holmes",
    "size": 8.5,
    "cultivatedArea": 6.5,
    "acquisitionDate": "30.12.2020",
    "lastUpdated": "30.12.2020",
}

payable = {"_id": {"$oid": "5e0fbc43085b80f91d7061e1"}, "category": "MO Dia", "subCategory": "", "pricePerUnit": 200,
           "transactionDate": "2016-01-19T00:00:00.000Z", "quantity": 2, "documentId": "yxz", "fieldId": "Catsito",
           "comment": "Abrirar giardaraya, quema de cana de Rogelio (AMTG, JCMT), Veneno en el predio de los limones",
           "lastUpdated": "2019-12-09T00:00:00.000Z"}

r = validate_json(field, field_schema)
print("Schema valid: {}".format(r))

r = validate_json(payable, payable_schema)
print("Payable valid: {}".format(r))

