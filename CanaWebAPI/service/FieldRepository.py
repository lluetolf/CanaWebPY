from bson import ObjectId

from CanaWebAPI import mongo
from flask import current_app as app


class FieldRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        tmp = mongo
        self.fields = mongo.db.fields

    def create(self, field):
        if field is not None:
            self.fields.insert(field)
            print("Created new field with ObjectID: {}".format(field['_id']))
            return field
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def read_one(self, field_id=None):
        app.logger.debug("Read_One: {}".format(field_id))
        return self.fields.find_one({"_id": ObjectId(field_id)})

    def update(self, field):
        if not field:
            raise Exception("Nothing to update, field is None")

        app.logger.info("Updating field with ObjectId: {}".format(field['_id']))
        field['_id'] = ObjectId(field['_id'])
        result = self.fields.replace_one({'_id': field['_id']}, field)
        app.logger.info("Return: {}".format(repr(result)))
        return bool(result.modified_count)

    def delete(self, field_id):
        if field_id is None:
            raise Exception("Nothing to delete, because field_id is None")

        result = self.fields.delete_one( {'_id': ObjectId(field_id) } )
        app.logger.debug("Delete return: {}".format(repr(result)))

        return bool(result.deleted_count)

    def read_all(self):
        return list(self.fields.find({}))
