import dateutil.parser
from jsonschema import draft7_format_checker, validate

from CanaWebAPI.entities.mongo_base_entity import MongoBaseEntity


class PayableEntity(MongoBaseEntity):
    def __init__(self, json_dict: dict):
        self.required = ['category', 'comment', 'fieldName', 'subCategory', 'documentId', 'pricePerUnit', 'quantity',
                         'lastUpdated', 'transactionDate']
        self.optional = ['_id']
        super().__init__(json_dict)


import datetime
payable_json = {'category': 'cat1', 'comment': 'comment2', 'fieldName': 'oinky', 'subCategory': 'subcat1', 'documentId': 1, 'pricePerUnit': 2, 'quantity': 3,'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime.now()}
#
#
#
#
#
# Old approache using json validation. Keeping it here to reuse later on.
#
payable_schema = {
    'type': 'object',
    'properties': {
        '_id': {'type': 'string'},
        'category': {'type': 'string'},
        'comment': {'type': 'string'},
        'fieldId': {'type': 'string'},
        'subCategory': {'type': 'string'},
        'documentId': {'type': 'number'},
        'pricePerUnit': {'type': 'number'},
        'quantity': {'type': 'number'},
        'lastUpdated': {
            "type": "string",
            "pattern": "^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])"
        },
        'transactionDate': {
            "type": "string",
            "pattern": "^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])"
        }
    },
    'required': ['_id', 'category', 'comment', 'fieldId', 'subCategory', 'documentId', 'pricePerUnit', 'quantity',
                 'lastUpdated', 'transactionDate']
}


def validate_payable(payable):
    try:
        validate(instance=payable, schema=payable_schema, format_checker=draft7_format_checker)
        payable['transactionDate'] = dateutil.parser.isoparse(payable['transactionDate'])
        payable['lastUpdated'] = dateutil.parser.isoparse(payable['lastUpdated'])
        return payable, None
    except Exception as e:
        if hasattr(e, 'message'):
            return None, e.message
        else:
            return None, "Unknown error occurred."
