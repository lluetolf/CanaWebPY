from jsonschema import *

field_schema = {
   'type': 'object',
   'properties': {
       'id': {'type': 'number'},
       'name': {'type': 'string'},
       'owner': {'type': 'string'},
       'size': {'type': 'number'},
       'cultivatedArea': {'type': 'number'},
       'acquisitionDate': {
           "type": "string",
           "pattern": "^[0-9]{2}.[0-9]{2}.[0-9]{4}$"
       },
       'ingenioId': {'type': 'number'},
       'lastUpdated': {'type': 'string'}
   },
   'required': ['id', 'name', 'owner', 'size', 'cultivatedArea', 'acquisitionDate', 'ingenioId', 'lastUpdated']
}


def validate_field(field):
    try:
        validate(instance=field, schema=field_schema, format_checker=draft7_format_checker)
    except Exception as e:
        if hasattr(e, 'message'):
            return e.message
        else:
            return "Unknown error occurred."
    return None
