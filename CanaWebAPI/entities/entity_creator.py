import datetime

from schema import Schema, And, Or, Optional, SchemaWrongKeyError


def check_field(field_dict: {}):
    schema = Schema({
        'name': And(str),
        'owner': And(str),
        'size': Or(float, int),
        'cultivatedArea': Or(float, int),
        'acquisitionDate': And(datetime.datetime),
        'ingenioId': And(int),
        'lastUpdated': And(datetime.datetime),
        Optional('_id'): Or(str, None)})

    try:
        error = None
        field = None
        field = schema.validate(field_dict)
    except SchemaWrongKeyError as e:
        error = str(e)
    except Exception as e:
        error = "Fatal"
    return field, error
