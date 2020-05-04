import os


class Config:
    """Base config vars."""
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SESSION_COOKIE_NAME = os.environ.get('SESSION_COOKIE_NAME')


class ProdConfig(Config):
    DEBUG = False
    TESTING = False
    MONGO_URI = 'mongodb+srv://canauser:{}@canawebmdb-p5yz3.azure.mongodb.net/CanaWebMDB?retryWrites=true&w=majority'.format(
        os.environ.get('MONGO_PW', 'NO_PASSWORD_PROVIDED')
    )


class DevConfig(Config):
    DEBUG = True
    TESTING = True
    MONGO_URI = 'mongodb+srv://canauser:{}@canawebmdb-p5yz3.azure.mongodb.net/CanaWebMDB_DEV?retryWrites=true&w=majority'.format(
        os.environ.get('MONGO_PW', 'NO_PASSWORD_PROVIDED')
    )


class TestingConfig(Config):
    SECRET_KEY = 'my_precious'
    TESTING = True
    DEBUG = True
    MONGO_URI = 'mongodb+srv://canauser:{}@canawebmdb-p5yz3.azure.mongodb.net/CanaWebMDB_TEST?retryWrites=true&w=majority'.format(
        os.environ.get('MONGO_PW', 'NO_PASSWORD_PROVIDED')
    )
