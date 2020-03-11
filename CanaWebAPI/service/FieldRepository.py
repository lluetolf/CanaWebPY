import os

from bson import ObjectId
from flask import g
from pymongo import MongoClient

from CanaWebAPI.LogDecorator import logger


def get_field_repo():
    if 'FieldRepository' not in g:
        g.FieldRepository = FieldRepository(os.getenv("CANAWEB_MONGO"))

    return g.FieldRepository


class FieldRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self, srv):
        self.srv = srv
        self.client = MongoClient(srv)
        self.fields = self.client['CanaWebMDB'].fields

    def create(self, field):
        if field is not None:
            self.fields.insert(field)
            print("Created new field with ObjectID: {}".format(field['_id']))
            return field
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def read_one(self, field_id=None):
        logger.debug("Read_One: {}".format(field_id))
        return self.fields.find_one({"_id": ObjectId(field_id)})

    def update(self, field):
        if not field:
            raise Exception("Nothing to update, field is None")

        logger.info("Updating field with ObjectId: {}".format(field['_id']))
        field['_id'] = ObjectId(field['_id'])
        result = self.fields.replace_one({'_id': field['_id']}, field)
        logger.info("Return: {}".format(repr(result)))
        return bool(result.modified_count)

    def delete(self, field_id):
        if field_id is None:
            raise Exception("Nothing to delete, because field_id is None")

        result = self.fields.delete_one( {'_id': ObjectId(field_id) } )
        logger.debug("Delete return: {}".format(repr(result)))

        return bool(result.deleted_count)

    def read_all(self):
        return list(self.fields.find({}))
