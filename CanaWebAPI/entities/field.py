import dateutil.parser
from flask import jsonify
from jsonschema import *


class Field:
    required = ['name', 'owner', 'size', 'cultivatedArea', 'acquisitionDate', 'ingenioId', 'lastUpdated']
    optional = ['_id']

    def __init__(self, json_dict: dict):
        for i in Field.required + Field.optional:
            self.__dict__[i] = json_dict.get(i, None)

    # Method to ensure _id is not passed to MongoDB
    def dict(self) -> dict:
        copy = self.__dict__.copy()
        copy.pop('_id', None)
        return copy

    def jsonify(self) -> dict:
        return jsonify(self.__dict__)




def validate_field(field):
    try:
        validate(instance=field, schema=field_schema, format_checker=draft7_format_checker)

        return field, None
    except Exception as e:
        if hasattr(e, 'message'):
            return None, e.message
        else:
            return None, "Unknown error occurred."
