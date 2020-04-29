from bson import ObjectId

from CanaWebAPI import mongo
from flask import current_app as app


class AuthRepository(object):
    """ Repository implementing CRUD operations on fields collection in MongoDB """

    def __init__(self):
        self.users = mongo.db.users

    def check_for_user(self, username, password):
        app.logger.debug("check_for_user: {}".format(username))
        user = self.users.find_one({"username": username, 'password': password})
        return user is not None

    def register_new_user(self, username, password):
        app.logger.debug("register_new_user: {}".format(username))
        try:
            if self.check_for_user(username, password):
                return "Username already registered."

            user = self.users.insert_one({'username': username, 'password': password})
            return None
        except Exception as e:
            app.logger.error("Failed with " + e)
            return "Failed with " + e
