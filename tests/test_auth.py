import time
import unittest

from pymongo import MongoClient

from tests.base import BaseTestCase

from CanaWebAPI.config import TestingConfig


# @unittest.skip("demonstrating skipping")
class AuthenticationTests(BaseTestCase):
    @classmethod
    def setUpClass(cls):
        try:
            client = MongoClient(TestingConfig.MONGO_URI)
            users = client[TestingConfig.MONGO_DB]['users']
            users.delete_many({})
        except Exception as e:
            print("Unable to prepare DB." + e)

    @classmethod
    def tearDownClass(cls):
        pass

    def test_up_and_running(self):
        response_html = self.client.get('/')
        self.assert200(response_html)

        response_json = self.client.get('/upandrunning')
        self.assert200(response_json)
        body = response_json.json
        self.assertEqual(body['msg'], "Up and running!")
        self.assertGreaterEqual(body['version'], 1)

    def test_register_user(self):
        payload = {
            "email": "piggy1@tv.mx",
            "password": "oinky1"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)

    def test_double_register_user_fail(self):
        payload = {
            "email": "piggy@tv2.mx",
            "password": "oinky2"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)

        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 202)
        self.assertEqual(response.json['message'], 'User already exists. Please Log in.')

    def test_register_user_fail(self):
        payload = {
            "email": "piggy3@tv.mx"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assert400(response)

    def test_ping_pong(self):
        response = self.client.get('/auth/ping')
        self.assert200(response)
        self.assertEqual(response.json['msg'], 'ping')

        response = self.client.get('/auth/pong')
        self.assert401(response)
        self.assertEqual(response.json['message'], 'No Token provided!')

        #register
        payload = {
            "email": "piggy5@tv.mx",
            "password": "oinky"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)

        self._check_token_is_valid(response)

    # @unittest.skip("demonstrating skipping")
    def test_register_login_timeout(self):
        payload = {
            "email": "piggy@tv6.mx",
            "password": "oinky6"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)
        self._check_token_is_valid(response)

        response = self.client.post('/auth/login', json=payload)
        self.assert200(response)
        self._check_token_is_valid(response)

        time.sleep(15)

        response = self.client.get('/auth/pong', headers={'x-access-token': response.json["auth_token"]})
        self.assert401(response)
        self.assertEqual(response.json['message'], 'Signature expired. Please log in again.')

        response = self.client.get('/auth/pong', headers={'x-access-token': 'THIS_IS_NOT_A_VALID_TOKEN'})
        self.assert401(response)
        self.assertEqual(response.json['message'], 'Invalid token. Please log in again.')

    def test_logout(self):
        payload = {
            "email": "piggy@tv7.mx",
            "password": "oinky7"
        }

        # Register and logout
        rr = self.client.post('/auth/register', json=payload)
        self.assertEqual(rr.status_code, 201)
        self._check_token_is_valid(rr)
        self._logout_and_check_token_is_invalid(rr.json["auth_token"])

        # Login and Logout
        r_login = self.client.post('/auth/login', json=payload)
        self.assert200(r_login)
        self._check_token_is_valid(r_login)
        self._logout_and_check_token_is_invalid(r_login.json["auth_token"])

        # Login
        r_login = self.client.post('/auth/login', json=payload)
        self.assert200(r_login)
        self._check_token_is_valid(r_login)

    def _check_token_is_valid(self, response):
        auth_token = response.json["auth_token"]
        self.assertIsNotNone(auth_token)

        response = self.client.get('/auth/pong', headers={'x-access-token': auth_token})
        self.assert200(response)
        self.assertEqual(response.json['msg'], 'pong')

    def _logout_and_check_token_is_invalid(self, token):
        # logout and check token is invalid
        r_logout = self.client.post('/auth/logout', json={}, headers={'x-access-token': token})
        self.assert200(r_logout)

        response = self.client.get('/auth/pong', headers={'x-access-token': token})
        self.assert401(response)
        self.assertEqual(response.json['message'], 'Token blacklisted. Please login again')
        time.sleep(1)


if __name__ == "__main__":
    unittest.main()
