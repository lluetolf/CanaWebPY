import datetime

from bson import ObjectId

from CanaWebAPI import mongo
from flask import current_app as app


class FieldRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        self.fields = mongo.db.fields

    def create(self, field):
        if field is not None:
            self.fields.insert_one(field)
            print("Created new field with ObjectID: {}".format(field['_id']))
            return field
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def read_one(self, field_name=None):
        app.logger.debug("Read_One: {}".format(field_name))
        field = self.fields.find_one({"name": field_name}, {'_id': 0})
        return field

    def update(self, field):
        if not field:
            raise Exception("Nothing to update, field is None")

        app.logger.info("Updating field with Name: {}".format(field['name']))
        field['lastUpdated'] = datetime.datetime.now()
        result = self.fields.replace_one({'name': field['name']}, field)
        app.logger.info("Return: {}".format(repr(result)))
        return bool(result.modified_count)

    def delete(self, field_name):
        if field_name is None:
            raise Exception("Nothing to delete, because field_name is None")

        result = self.fields.delete_one({'name': field_name})
        app.logger.debug("Delete return: {}".format(repr(result)))

        return bool(result.deleted_count)

    def read_all(self):
        return list(self.fields.find({}, {'_id': 0}))
