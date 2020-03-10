import dateutil.parser
from jsonschema import *

field_schema = {
   'type': 'object',
   'properties': {
       '_id': {'type': 'string'},
       'name': {'type': 'string'},
       'owner': {'type': 'string'},
       'size': {'type': 'number'},
       'cultivatedArea': {'type': 'number'},
       'acquisitionDate': {
           "type": "string",
           "pattern": "^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])"
       },
       'ingenioId': {'type': 'number'},
       'lastUpdated': {'type': 'string'}
   },
   'required': ['_id', 'name', 'owner', 'size', 'cultivatedArea', 'acquisitionDate', 'ingenioId', 'lastUpdated']
}


def validate_field(field):
    try:
        validate(instance=field, schema=field_schema, format_checker=draft7_format_checker)
        field['acquisitionDate'] = dateutil.parser.isoparse(field['acquisitionDate'])
        field['lastUpdated'] = dateutil.parser.isoparse(field['lastUpdated'])
        return field, None
    except Exception as e:
        if hasattr(e, 'message'):
            return None, e.message
        else:
            return None, "Unknown error occurred."
