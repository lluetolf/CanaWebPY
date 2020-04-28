import json
import os
import time
import unittest

from tests.base import BaseTestCase


class BasicTests(BaseTestCase):

    def test_main_page(self):
        response_html = self.client.get('/', follow_redirects=True)
        self.assert200(response_html)

        response_json = self.client.get('/upandrunning')
        self.assert200(response_json)
        self.assertEqual(response_json.json, {'msg': "Up and running!"})


if __name__ == "__main__":
    unittest.main()
