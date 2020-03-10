import logging
from functools import wraps, partial


logger = logging.getLogger('decorator-log')
logger.setLevel(logging.DEBUG)

# create console handler and set level to debug
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

# create formatter
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

# add formatter to cht
ch.setFormatter(formatter)

# add ch to logger
logger.addHandler(ch)


def LogDecorator(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        try:
            logger.debug("{0} - {1} - {2}".format(fn.__name__, args, kwargs))
            result = fn(*args, **kwargs)
            logger.debug(result)
            return result
        except Exception as ex:
            logger.debug("Exception {0}".format(ex))
            raise ex
        return result
    return wrapper
