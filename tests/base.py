import os
from flask_testing import TestCase

from CanaWebAPI import create_app, mongo

db = mongo


class BaseTestCase(TestCase):
    """ Base Tests """

    def create_app(self):
        os.environ['CANAWEB_MONGO'] = "mongodb+srv://canauser:wtz7uLZjUOUPTIHb@canawebmdb-p5yz3.azure.mongodb.net/CanaWebMDB?retryWrites=true&w=majority"
        return create_app()

    def setUp(self):
        pass

    def tearDown(self):
        pass
