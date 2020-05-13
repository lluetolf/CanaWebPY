import datetime

from schema import Schema, And, Or, Optional, SchemaWrongKeyError


def _check_generic(entity_dict: {}, schema: Schema):
    try:
        error = None
        field = None
        field = schema.validate(entity_dict)
    except SchemaWrongKeyError as e:
        error = str(e)
    except Exception as e:
        error = "Fatal"
    return field, error


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

    return _check_generic(field_dict, schema)


def check_payable(payable: {}):
    schema = Schema({
        'fieldName': And(str),
        'category': And(str),
        'subCategory': And(str),
        'documentId': Or(int),
        'pricePerUnit': Or(float, int),
        'quantity': And(int),
        'comment': And(str),
        'transactionDate': And(datetime.datetime),
        'lastUpdated': And(datetime.datetime),
        Optional('_id'): Or(str, None)})

    return _check_generic(payable, schema)