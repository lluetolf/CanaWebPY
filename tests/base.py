import os

from flask_testing import TestCase

from CanaWebAPI import create_app, mongo

db = mongo


class BaseTestCase(TestCase):
    """ Base Tests """

    def create_app(self):
        #TODO move this to conf
        os.environ[
            'CANAWEB_MONGO'] = "mongodb+srv://canauser:wtz7uLZjUOUPTIHb@canawebmdb-" \
                               "p5yz3.azure.mongodb.net/CanaWebMDB?retryWrites=true&w=majority"
        return create_app()

    def check_up_and_running(self):
        response_json = self.client.get('/upandrunning')
        self.assert200(response_json)
        body = response_json.json
        self.assertEqual(body['msg'], "Up and running!")
        self.assertGreaterEqual(body['version'], 1)

    def check_root_page(self):
        response_html = self.client.get('/')
        self.assert200(response_html)

    def setUp(self):
        pass

    def tearDown(self):
        pass
