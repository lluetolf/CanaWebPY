import datetime
from flask.json import JSONEncoder


class APIEncoder(JSONEncoder):
    def default(self, o):
        try:
            if isinstance(o, datetime.datetime):
                return o.isoformat()
            else:
                iterable = iter(o)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, o)

