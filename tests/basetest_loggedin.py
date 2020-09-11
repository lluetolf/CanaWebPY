import random
import string

from tests.base import BaseTestCase


class BaseTestLoggedIn(BaseTestCase):
    def login(self):
        if not hasattr(self, 'headers'):
            # Register a test user and save token
            with self.app.test_request_context():
                payload = {
                    "email": ''.join(
                        random.choice(string.ascii_uppercase + string.digits) for _ in range(10)) + "@tv.mx",
                    "password": "test_field"
                }
                response = self.client.post('/auth/register', json=payload)
                self.headers = {'x-access-token': response.json["auth_token"]}

    def check_auth_on_pong(self):
        response = self.client.get('/auth/pong', headers=self.headers)
        self.assert200(response)
        self.assertEqual(response.json['msg'], 'pong')

    def logged_in_up_and_running(self):
        self.check_root_page()

        self.check_up_and_running()

        self.check_auth_on_pong()

    def setUp(self):
        self.login()

    @classmethod
    def tearDownClass(cls):
        pass

    def test_up_and_running(self):
        self.logged_in_up_and_running()


