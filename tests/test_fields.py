import json
import unittest
import datetime

from pymongo import MongoClient

from tests.base import BaseTestCase

from CanaWebAPI.config import TestingConfig


class FieldsBPTests(BaseTestCase):
    @classmethod
    def setUpClass(cls):
        try:
            client = MongoClient(TestingConfig.MONGO_URI)
            fields = client['CanaWebMDB_TEST']['fields']
            fields.delete_many({})
            base_data = [
                {"name":"Apple","owner":"Elderberries","acquisitionDate":datetime.datetime(2018, 1, 1),"cultivatedArea":4,"ingenioId":-1,"lastUpdated":datetime.datetime.now(),"size":16},
                {"name":"Banana","owner":"Figs","acquisitionDate":datetime.datetime(2018, 2, 2),"cultivatedArea":6,"ingenioId":-1,"lastUpdated":datetime.datetime.now(),"size":8},
                {"name":"Clementine","owner":"Grapefruit","acquisitionDate":datetime.datetime(2018, 3, 3),"cultivatedArea":12,"ingenioId":-1,"lastUpdated":datetime.datetime.now(),"size":12},
                {"name":"Durian","owner":"Honeydew Melon","acquisitionDate":datetime.datetime(2018, 4, 4),"cultivatedArea":10,"ingenioId":-1,"lastUpdated":datetime.datetime.now(),"size":10}]
            fields.insert_many(base_data)
        except Exception as e:
            print("Unable to prepare DB." + str(e))

    @classmethod
    def tearDownClass(cls):
        pass

    def test_up_and_running(self):
        response_html = self.client.get('/')
        self.assert200(response_html)

        response_json = self.client.get('/upandrunning')
        self.assert200(response_json)
        self.assertEqual(response_json.json, {'msg': "Up and running!"})

    def test_get_all_fields(self):
        response = self.client.get('/field')
        self.assert200(response)
        self.assertIsNotNone(response.json)
        self.assertEqual(len(response.json), 4)


if __name__ == "__main__":
    unittest.main()
