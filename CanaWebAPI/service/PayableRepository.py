import datetime

from bson import ObjectId

from CanaWebAPI import mongo
from flask import current_app as app


class PayableRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        self.payables = mongo.db.payables

    def read_all(self) -> []:
        app.logger.debug("Read_All: {}")
        return list(self.payables.find({}))

    def read_one(self, payable_id: str) -> {}:
        app.logger.debug("Read_One: {}".format(payable_id))
        return self.payables.find_one({"_id": ObjectId(payable_id)})

    def create(self, payable: {}) -> bool:
        if payable is not None:
            # Make sure _id is not provided
            payable.pop('_id', None)
            result = self.payables.insert_one(payable)
            if result.inserted_id is not None:
                app.logger.info("Created new Payable with ObjectID: {}".format(result.inserted_id))
                return True
            else:
                app.logger.error("Unable to create Payable.")
                return False
        else:
            raise Exception("Nothing to save, because field parameter is None")

    def update(self, payable: {}) -> bool:
        if payable is None and payable.get('_id', 'UNKNOWN') != 'UNKNOWN':
            raise Exception("Nothing to update, payable is None")

        app.logger.info("Updating payable with ObjectId: {}".format(payable['_id']))
        payable['lastUpdated'] = datetime.datetime.now()
        result = self.payables.replace_one({'_id': ObjectId(payable['_id'])}, payable)
        return bool(result.modified_count)

    def delete(self, payable_id: str):
        if payable_id is None:
            raise Exception("Nothing to delete, because payable_id is None")

        result = self.payables.delete_one({'_id': ObjectId(payable_id)})
        return bool(result.deleted_count)
