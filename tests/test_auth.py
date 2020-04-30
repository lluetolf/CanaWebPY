import json
import os
import time
import unittest

from tests.base import BaseTestCase


class BasicTests(BaseTestCase):

    def test_up_and_running(self):
        response_html = self.client.get('/')
        self.assert200(response_html)

        response_json = self.client.get('/upandrunning')
        self.assert200(response_json)
        self.assertEqual(response_json.json, {'msg': "Up and running!"})

    def test_ping_pong(self):
        response = self.client.get('/auth/ping')
        self.assert200(response)
        self.assertEqual(response.json['msg'], 'ping')

        response = self.client.get('/auth/pong')
        self.assert200(response)
        self.assertEqual(response.json['msg'], 'pong')

    def test_register_user(self):
        payload = {
            "email": "piggy@tv.mx",
            "password": "oinky"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)

    def test_register_user_fail(self):
        payload = {
            "email": "piggy@tv.mx"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assert400(response)

    def test_double_register_user_fail(self):
        payload = {
            "email": "piggy@tv2.mx",
            "password": "oinky2"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)

        response = self.client.post('/auth/register', json=payload)
        self.assert400(response)

    def test_create_and_login(self):
        payload = {
            "email": "piggy@tv3.mx",
            "password": "oinky3"
        }
        response = self.client.post('/auth/register', json=payload)
        self.assertEqual(response.status_code, 201)

        response = self.client.post('/auth/login', json=payload)
        self.assert200(response)


if __name__ == "__main__":
    unittest.main()
