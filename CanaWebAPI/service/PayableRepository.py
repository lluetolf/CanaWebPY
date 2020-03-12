from bson import ObjectId

from CanaWebAPI import mongo
from flask import current_app as app


class PayableRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        self.payables = mongo.db.payables

    def read_all(self):
        return list(self.payables.find({}))

    def read_one(self, payable_id=None):
        app.logger.debug("Read_One: {}".format(payable_id))
        return self.payables.find_one({"_id": ObjectId(payable_id)})

    def create(self, payable):
        if payable is not None:
            self.payables.insert(payable)
            print("Created new payable with ObjectID: {}".format(payable['_id']))
            return payable
        else:
            raise Exception("Nothing to save, because payable parameter is None")

    def update(self, payable):
        if not payable:
            raise Exception("Nothing to update, payable is None")

        app.logger.info("Updating payable with ObjectId: {}".format(payable['_id']))
        payable['_id'] = ObjectId(payable['_id'])
        result = self.payables.replace_one({'_id': payable['_id']}, payable)
        app.logger.info("Return: {}".format(repr(result)))
        return bool(result.modified_count)

    def delete(self, payable_id):
        if payable_id is None:
            raise Exception("Nothing to delete, because payable_id is None")

        result = self.payables.delete_one({'_id': ObjectId(payable_id)})
        app.logger.debug("Delete return: {}".format(repr(result)))

        return bool(result.deleted_count)
