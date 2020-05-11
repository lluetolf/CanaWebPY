import unittest
import datetime

from pymongo import MongoClient

from CanaWebAPI.entities.payable_entity import PayableEntity
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
            base_data = [
                {'category': 'MO Matutina', 'subCategory': '', 'comment': 'Comment1', 'fieldName': 'Apple',
                 'documentId': 1, 'pricePerUnit': 2, 'quantity': 3,
                 'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(2020, 1, 11)},
                {'category': 'MO Matutina', 'subCategory': '', 'comment': 'Comment2', 'fieldName': 'Banana',
                 'documentId': 2, 'pricePerUnit': 2.5, 'quantity': 4,
                 'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(2020, 3, 11)},
                {'category': 'MO Matutina', 'subCategory': '', 'comment': 'Comment3', 'fieldName': 'Clementine',
                 'documentId': 3, 'pricePerUnit': 7.5, 'quantity': 5,
                 'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(2020, 2, 11)},
                {'category': 'MO Matutina', 'subCategory': '', 'comment': 'Comment4', 'fieldName': 'Durian',
                 'documentId': 4, 'pricePerUnit': 11.8, 'quantity': 6,
                 'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(2020, 4, 11)},
            ]
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

    def test_get_all_payables(self):
        response = self.client.get('/payable', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)
        self.assertGreaterEqual(len(response.json), 2)
        try:
            json = response.json
            pe = PayableEntity(json[1])
        except:
            pass
        self.assertIsNotNone(pe)


    def test_add_payable(self):
        response = self.client.get('/payable', headers=self.headers)
        current_nbr_payables = len(response.json)
        self.assert200(response)
        self.assertIsNotNone(response.json)

        new_payable = {'category': 'MO Matutina', 'subCategory': '', 'comment': 'CommentX', 'fieldName': 'Durian',
         'documentId': 4, 'pricePerUnit': 11.8, 'quantity': 6,
         'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(1999, 10, 10)}

        response = self.client.post('/payable', json=new_payable, headers=self.headers)
        self.assertEqual(response.status_code, 201)

        response = self.client.get('/payable', headers=self.headers)
        self.assert200(response)
        self.assertEqual(len(response.json), current_nbr_payables+1)

    def test_update_payable(self):
        pass

    def test_delete_payable(self):
        pass
