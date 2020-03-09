import datetime
from json import JSONEncoder

class FileEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime.datetime):
            return { "$date":  o.isoformat() }
        else:
            return o.__dict__