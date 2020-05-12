import random
import string

from tests.base import BaseTestCase


class BaseTestLoggedIn(BaseTestCase):
    def login(self):
        if not hasattr(self, 'headers'):
            # Register a test user and save token
            with self.app.test_request_context():
                payload = {
                    "email": ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10)) + "@tv.mx",
                    "password": "test_field"
                }
                response = self.client.post('/auth/register', json=payload)
                self.headers = {'x-access-token': response.json["auth_token"]}

    def logged_in_up_and_running(self):
        response_html = self.client.get('/')
        self.assert200(response_html)

        response_json = self.client.get('/upandrunning')
        self.assert200(response_json)
        body = response_json.json
        self.assertEqual(body['msg'], "Up and running!")
        self.assertGreaterEqual(body['version'], 1)

        response = self.client.get('/auth/pong', headers=self.headers)
        self.assert200(response)
        self.assertEqual(response.json['msg'], 'pong')