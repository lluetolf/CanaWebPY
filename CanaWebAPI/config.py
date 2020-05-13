import os


class Config:
    """Base config vars."""
    VERSION = 1.0
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SESSION_COOKIE_NAME = os.environ.get('SESSION_COOKIE_NAME')


class ProdConfig(Config):
    DEBUG = False
    TESTING = False
    MONGO_USER = 'canauser'
    MONGO_DB = 'CanaWebMDB'
    MONGO_URI = 'mongodb+srv://{}:{}@canawebmdb-p5yz3.azure.mongodb.net/{}?retryWrites=true&w=majority'.format(
        MONGO_USER,
        os.environ.get('MONGO_PW', 'NO_PASSWORD_PROVIDED'),
        MONGO_DB
    )


class DevConfig(Config):
    DEBUG = True
    TESTING = True
    MONGO_USER = 'canauser_dev'
    MONGO_DB = 'CanaWebMDB_DEV'
    MONGO_URI = 'mongodb+srv://{}:{}@canawebmdb-p5yz3.azure.mongodb.net/{}?retryWrites=true&w=majority'.format(
        MONGO_USER,
        os.environ.get('MONGO_PW', 'NO_PASSWORD_PROVIDED'),
        MONGO_DB
    )


class TestingConfig(Config):
    SECRET_KEY = 'my_precious'
    TESTING = True
    DEBUG = True
    TOKEN_LIVE_SPAN = 12
    MONGO_USER = 'canauser_dev'
    MONGO_DB = 'CanaWebMDB_TEST'
    MONGO_URI = 'mongodb+srv://{}:{}@canawebmdb-p5yz3.azure.mongodb.net/{}?retryWrites=true&w=majority'.format(
        MONGO_USER,
        os.environ.get('MONGO_PW', 'NO_PASSWORD_PROVIDED'),
        MONGO_DB
    )
