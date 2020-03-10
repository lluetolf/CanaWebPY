import datetime
from flask.json import JSONEncoder
from bson import ObjectId


class APIEncoder(JSONEncoder):
    def default(self, o):
        try:
            if isinstance(o, datetime.datetime):
                return o.isoformat()
            if isinstance(o, ObjectId):
                return str(o)
            else:
                iterable = iter(o)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, o)

