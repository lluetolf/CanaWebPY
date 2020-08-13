from flask import current_app as app
from functools import wraps, partial


def debug_logs(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        try:
            app.logger.debug("{0} - {1} - {2}".format(fn.__name__, args, kwargs))
            result = fn(*args, **kwargs)
            app.logger.debug("{} - {}".format(fn.__name__, result))
            return result
        except Exception as ex:
            app.logger.debug("Exception {0}".format(ex))
            raise ex

    return wrapper
