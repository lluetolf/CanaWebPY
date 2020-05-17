import datetime
import unittest

from pymongo import MongoClient

from CanaWebAPI.config import TestingConfig
from CanaWebAPI.entities.entity_checks import check_payable
from tests.basetest_loggedin import BaseTestLoggedIn


# @unittest.skip("demonstrating skipping")
class PayablesBPTests(BaseTestLoggedIn):
    @classmethod
    def setUpClass(cls):
        try:
            client = MongoClient(TestingConfig.MONGO_URI)
            payables = client[TestingConfig.MONGO_DB]['payables']
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
            pe = check_payable(json[1])
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
        new_payable = {'category': 'MO Matutina', 'subCategory': '', 'comment': 'Comment', 'fieldName': 'Durian',
                       'documentId': 4, 'pricePerUnit': 11.8, 'quantity': 6,
                       'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(1999, 10, 10)}

        response = self.client.post('/payable', json=new_payable, headers=self.headers)
        self.assertEqual(response.status_code, 201)

        payable_local = response.json
        pid = payable_local['_id']
        payable_local['category'] = 'Update Cat'
        payable_local['subCategory'] = 'Update subCategory'
        payable_local['comment'] = 'Update comment'
        payable_local['fieldName'] = 'Update fieldName'
        payable_local['documentId'] = payable_local['documentId'] + 1
        payable_local['pricePerUnit'] = payable_local['pricePerUnit'] + 1
        payable_local['quantity'] = payable_local['quantity'] + 1
        payable_local['transactionDate'] = datetime.datetime(2009, 10, 10)
        response = self.client.patch('/payable', json=payable_local, headers=self.headers)
        self.assertEqual(response.status_code, 200)

        response = self.client.get('/payable/' + pid, headers=self.headers)
        self.assertEqual(response.status_code, 200)
        payable_db = response.json
        for i in payable_db.keys():
            if i == 'lastUpdated':
                self.assertNotEqual(payable_db[i], payable_local[i])
            else:
                self.assertEqual(payable_db[i], payable_local[i])

    def test_delete_payable(self):
        new_payable = {'category': 'MO Matutina', 'subCategory': '', 'comment': 'Comment', 'fieldName': 'Durian',
                       'documentId': 4, 'pricePerUnit': 11.8, 'quantity': 6,
                       'lastUpdated': datetime.datetime.now(), 'transactionDate': datetime.datetime(1999, 10, 10)}

        response = self.client.post('/payable', json=new_payable, headers=self.headers)
        self.assertEqual(response.status_code, 201)

        p_id = response.json['_id']

        response = self.client.get('/payable/' + p_id, headers=self.headers)
        self.assertEqual(response.status_code, 200)

        response = self.client.delete('/payable/' + p_id, headers=self.headers)
        self.assertEqual(response.status_code, 200)

        response = self.client.get('/payable/' + p_id, headers=self.headers)
        self.assertEqual(response.status_code, 204)

    def test_get_latest_payables(self):
        response = self.client.get('/payable/latest/2', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)
        self.assertEqual(len(response.json), 2)

    def test_get_range_of_payables(self):
        from_date = datetime.datetime(2020, 3, 1)
        to_date = datetime.datetime(2020, 12, 31)
        url = '/payable/{}/{}'.format(from_date.isoformat(), to_date.isoformat())
        response = self.client.get(url, headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)
        self.assertGreaterEqual(len(response.json), 2)
