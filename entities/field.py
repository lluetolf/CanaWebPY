from jsonschema import *

field_schema = {
   'type': 'object',
   'properties': {
       'id': {'type': 'number'},
       'name': {'type': 'string'},
       'owner': {'type': 'string'},
       'size': {'type': 'number'},
       'cultivated_area': {'type': 'number'},
       'acquisition_date': {'format': 'date'},
       'ingenio_id': {'type': 'number'},
       'last_updated': {'format': 'date'}
   },
   'required': ['id', 'name', 'owner', 'size', 'cultivated_area', 'acquisition_date', 'ingenio_id', 'last_updated']
}


def validate_field(request):
    try:
        validate(instance=request.json, schema=field_schema, format_checker=draft7_format_checker)
    except Exception as e:
        if hasattr(e, 'message'):
            return e.message
        else:
            return "Unknown error occurred."
    return None
