from datetime import datetime

from CanaWebAPI import mongo
from flask import current_app as app


class FieldRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        self.fields = mongo.db.fields

    def read_all(self):
        app.logger.debug("Read_All: {}")
        return list(self.fields.find({}))

    def read_one(self, field_name: str):
        app.logger.debug("Read_One: {}".format(field_name))
        field = self.fields.find_one({"name": field_name}, {'_id': 0})
        return field

    def create(self, field: {}):
        if field is not None:
            # Make sure _id is not provided
            field.pop('_id', None)
            result = self.fields.insert_one(field)
            if result.inserted_id is not None:
                app.logger.info("Created new field with ObjectID: {}".format(field.get('_id', 'UNKNOWN')))
                return True
            else:
                app.logger.error("Unable to create Field.")
                return False
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def update(self, field):
        if field is None:
            raise Exception("Nothing to update, field is None")

        app.logger.debug("Updating field with Name: {}".format(field['name']))
        # Make sure _id is not provided
        field.pop('_id', None)
        field['lastUpdated'] = datetime.utcnow()
        result = self.fields.replace_one({'name': field['name']}, field)
        return bool(result.modified_count)

    def delete(self, field_name):
        if field_name is None:
            raise Exception("Nothing to delete, because field_name is None")

        result = self.fields.delete_one({'name': field_name})
        return bool(result.deleted_count)

