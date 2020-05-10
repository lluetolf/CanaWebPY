import unittest
import datetime

from pymongo import MongoClient

from tests.base import BaseTestCase

from CanaWebAPI.config import TestingConfig
from tests.basetest_loggedin import BaseTestLoggedIn


class PayablesBPTests(BaseTestLoggedIn):
    @classmethod
    def setUpClass(cls):
        try:
            client = MongoClient(TestingConfig.MONGO_URI)
            payables = client['CanaWebMDB_TEST']['payables']
            payables.delete_many({})
            base_data = [{'name': 'test'}]
            payables.insert_many(base_data)

            users = client['CanaWebMDB_TEST']['users']
            users.delete_many({})

        except Exception as e:
            print("Unable to prepare DB." + str(e))

    def setUp(self):
        self.login()

    @classmethod
    def tearDownClass(cls):
        pass

    def test_up_and_running(self):
        self.logged_in_up_and_running()
