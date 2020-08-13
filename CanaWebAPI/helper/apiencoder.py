from datetime import datetime, date, time

import dateutil.parser
from flask import current_app as app
from flask.json import JSONEncoder, JSONDecoder
from bson import ObjectId


class APIEncoder(JSONEncoder):
    def default(self, o):
        try:
            if isinstance(o, (datetime, date, time)):
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


class APIDecoder(JSONDecoder):

    def __init__(self, *args, **kargs):
        JSONDecoder.__init__(self, object_hook=self.dt_parser,
                             *args, **kargs)

    def dt_parser(self, dct):
        for k, v in dct.items():
            if isinstance(v, str) and ("date" in k.lower() or k == 'lastUpdated'):
                try:
                    dct[k] = dateutil.parser.parse(v)
                except Exception as e:
                    app.logger.warning("Failed to convert date str to datetime. {}".format(str(e)))
            if isinstance(v, ObjectId):
                dct[k] = str(v)
        return dct
