import datetime
import unittest

from pymongo import MongoClient

from CanaWebAPI.config import TestingConfig
from tests.basetest_loggedin import BaseTestLoggedIn


# @unittest.skip("demonstrating skipping")
class FieldsBPTests(BaseTestLoggedIn):

    @classmethod
    def setUpClass(cls):
        try:
            client = MongoClient(TestingConfig.MONGO_URI)
            fields = client[TestingConfig.MONGO_DB]['fields']
            fields.delete_many({})
            base_data = [
                {"name": "Apple", "owner": "Elderberries", "acquisitionDate": datetime.datetime(2018, 1, 1),
                 "cultivatedArea": 4, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 16},
                {"name": "Banana", "owner": "Figs", "acquisitionDate": datetime.datetime(2018, 2, 2),
                 "cultivatedArea": 6, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 8},
                {"name": "Clementine", "owner": "Grapefruit", "acquisitionDate": datetime.datetime(2018, 3, 3),
                 "cultivatedArea": 12, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 12},
                {"name": "Durian", "owner": "Honeydew Melon", "acquisitionDate": datetime.datetime(2018, 4, 4),
                 "cultivatedArea": 10, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 10}]
            fields.insert_many(base_data)

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

    def test_get_all_fields(self):
        response = self.client.get('/field', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)
        self.assertGreaterEqual(len(response.json), 2)

    def test_add_field(self):
        response = self.client.get('/field', headers=self.headers)
        current_nbr_fields = len(response.json)
        self.assert200(response)
        self.assertIsNotNone(response.json)

        new_field = {"name": "Jackfruit", "owner": "Kiwi", "acquisitionDate": datetime.datetime(2020, 3, 18),
                     "cultivatedArea": 5, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 9}

        response = self.client.post('/field', json=new_field, headers=self.headers)
        self.assertEqual(response.status_code, 201)

        response = self.client.get('/field', headers=self.headers)
        self.assert200(response)
        self.assertEqual(len(response.json), current_nbr_fields + 1)

    def test_add_field_failure(self):
        # incomplete
        new_field = {"owner": "Kiwi", "acquisitionDate": datetime.datetime(2020, 3, 18),
                     "cultivatedArea": 5, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 9}
        response = self.client.post('/field', json=new_field, headers=self.headers)
        self.assertEqual(response.status_code, 400)

        # garbage
        new_field = "GARBAGE"
        response = self.client.post('/field', json=new_field, headers=self.headers)
        self.assertEqual(response.status_code, 400)

        # additional attribute
        new_field = {"name": "Jackfruit", "owner": "Kiwi", "acquisitionDate": datetime.datetime(2020, 3, 18),
                     "cultivatedArea": 5, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": 9,
                     'additional': 'added'}
        response = self.client.post('/field', json=new_field, headers=self.headers)
        self.assertEqual(response.status_code, 400)

        # wronge type
        new_field = {"name": "Jackfruit", "owner": "Kiwi", "acquisitionDate": datetime.datetime(2020, 3, 18),
                     "cultivatedArea": 5, "ingenioId": -1, "lastUpdated": datetime.datetime.now(), "size": "X"}
        response = self.client.post('/field', json=new_field, headers=self.headers)
        self.assertEqual(response.status_code, 400)

    def test_pick_and_delete_field(self):
        response = self.client.get('/field/Banana', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)
        banana = response.json

        response = self.client.delete('/field/Banana', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)

        response = self.client.get('/field/Banana', headers=self.headers)
        self.assertEqual(response.status_code, 204)

        response = self.client.post('/field', json=banana, headers=self.headers)
        self.assertEqual(response.status_code, 201)

        response = self.client.get('/field/Banana', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)

    def test_delete_field_fail(self):
        response = self.client.delete('/field/BananaXX', headers=self.headers)
        self.assert400(response)
        self.assertIsNotNone(response.json)

    def test_update_field(self):
        response = self.client.get('/field/Durian', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)

        new_durian = {
            "name": "Durian",
            "owner": "Honeydew Melon2",
            "acquisitionDate": datetime.datetime(2016, 6, 6),
            "cultivatedArea": 6,
            "ingenioId": 6,
            "lastUpdated": datetime.datetime.now() - datetime.timedelta(seconds=10),
            "size": 6
        }

        response = self.client.patch('/field', json=new_durian, headers=self.headers)
        self.assert200(response)

        response = self.client.get('/field/Durian', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)
        fetched_durian = response.json
        for i in new_durian.keys():
            if i != 'lastUpdated':
                self.assertEqual(new_durian[i], fetched_durian[i])
            else:
                self.assertNotEqual(new_durian[i], fetched_durian[i])

    def test_update_field_fail(self):
        response = self.client.get('/field/Durian', headers=self.headers)
        self.assert200(response)
        self.assertIsNotNone(response.json)

        # Missing attribute
        new_durian = {
            "name": "Durian",
            "acquisitionDate": datetime.datetime(2016, 6, 6),
            "cultivatedArea": 6,
            "ingenioId": 6,
            "lastUpdated": datetime.datetime.now() - datetime.timedelta(seconds=10),
            "size": 6
        }
        response = self.client.patch('/field', json=new_durian, headers=self.headers)
        self.assert400(response)

        # Wrong type
        new_durian = {
            "name": "Durian",
            "owner": "Honeydew Melon2",
            "acquisitionDate": datetime.datetime(2016, 6, 6),
            "cultivatedArea": "XXXX",
            "ingenioId": 6,
            "lastUpdated": datetime.datetime.now() - datetime.timedelta(seconds=10),
            "size": 6
        }
        response = self.client.patch('/field', json=new_durian, headers=self.headers)
        self.assert400(response)

        # Additional type
        new_durian = {
            "name": "Durian",
            "owner": "Honeydew Melon2",
            "acquisitionDate": datetime.datetime(2016, 6, 6),
            "cultivatedArea": "XXXX",
            "ingenioId": 6,
            "lastUpdated": datetime.datetime.now() - datetime.timedelta(seconds=10),
            "size": 6,
            "additional": 'nonsense'
        }
        response = self.client.patch('/field', json=new_durian, headers=self.headers)
        self.assert400(response)

        # No JSON
        new_durian = "GARBAGE"
        response = self.client.patch('/field', data=new_durian, headers=self.headers)
        self.assert400(response)
        self.assertEqual(response.json['message'], 'No JSON message sent.')


if __name__ == "__main__":
    unittest.main()
