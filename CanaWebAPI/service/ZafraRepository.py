from pymongo import MongoClient


class ZafraRepository(object):
    """ Repository implementing CRUD operations on zafras collection in MongoDB """

    def __init__(self, srv=None):
        self.client = MongoClient(srv)
        self.database = self.client['CanaWebDB']

    def create(self, field):
        if field is not None:
            new_id = self._get_next_id()
            field['id'] = new_id
            self.database.zafras.insert(field)
            print("Created new field with id: {}".format(new_id))
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def read_one(self, field_id=None):
        return self.database.zafras.find_one({"id": int(field_id)}, {"_id": 0})

    def update(self, field):
        if field is not None:
            # Check if already exists
            field_to_update = self.database.zafras.find_one({"id": int(field.id)}, {"_id": 0})
            if field_to_update:
                self.database.zafras.save(field.get_as_json())
            else:
                raise Exception("Nothing to update, field does not exist.")
        else:
            raise Exception("Nothing to update, because field parameter is None.")

    def delete(self, field):
        if field is not None:
            self.database.zafras.remove(field.get_as_json())
        else:
            raise Exception("Nothing to delete, because field parameter is None")

    def read_all(self):
        return list(self.database.zafras.find({}, {"_id": 0}))

    def _get_next_id(self):
        tmp = self.database.zafras.find_one(sort=[("id", -1)])["id"]
        return tmp + 1

