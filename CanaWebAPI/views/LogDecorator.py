from flask import current_app as app
from functools import wraps
import random

from CanaWebAPI.views.base_blueprint import respond_failed


def canaweb_ws_ep(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        try:
            app.logger.debug("{0} - {1} - {2}".format(fn.__name__, args, kwargs))
            result = fn(*args, **kwargs)
            app.logger.debug("{} - {}".format(fn.__name__, result))
            return result
        except Exception as ex:
            app.logger.error("Failed: {}".format(repr(ex)))
            return respond_failed("Request failed internally. Check logs.", response_code=500)

    return wrapper
