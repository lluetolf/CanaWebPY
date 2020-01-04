import os
from pymongo import MongoClient


class FieldRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        srv = os.getenv("CANAWEB_MONGO")
        self.client = MongoClient(srv)
        self.database = self.client['CanaWebDB']

    def create(self, field):
        if field is not None:
            new_id = self._get_next_id()
            field.id = new_id
            self.database.fields.insert(field.json)
            print("Created new field with id: {}".format(new_id))
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def read_one(self, field_id=None):
        return self.database.fields.find_one({"id": int(field_id)}, {"_id": 0})

    def update(self, field):
        if field is not None:
            # the save() method updates the document if this has an _id property
            # which appears in the collection, otherwise it saves the data
            # as a new document in the collection
            self.database.fields.save(field.get_as_json())
        else:
            raise Exception("Nothing to update, because field parameter is None")

    def delete(self, field):
        if field is not None:
            self.database.fields.remove(field.get_as_json())
        else:
            raise Exception("Nothing to delete, because field parameter is None")

    def read_all(self):
        return list(self.database.fields.find({}, {"_id": 0}))

    def _get_next_id(self):
        tmp = self.database.fields.find_one(sort=[("id", -1)])["id"]
        return tmp + 1

