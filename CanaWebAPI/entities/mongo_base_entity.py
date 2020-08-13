from flask import jsonify


class MongoBaseEntity:
    @property
    def id(self):
        return self._id if hasattr(self, '_id') else None

    def __init__(self, json_dict: dict):
        if self.required is not None and self.optional is not None:
            all_possible_attributes = self.required + self.optional
            provided_attributes = list(json_dict.keys())

            # Check only expected values are sent
            if set(provided_attributes) - set(all_possible_attributes):
                print(
                    "Failed, did not expect attributes: {}".format(
                        list(set(provided_attributes) - set(all_possible_attributes))))

            # Check if all mandatory attributes are present
            if set(self.required) - set(provided_attributes):
                print(
                    "Mandatory attributes not provided: {}".format(list(set(self.required) - set(provided_attributes))))

            for attr in all_possible_attributes:
                self.__dict__[attr] = json_dict.get(attr, None)

    # Method to ensure _id is not passed to MongoDB
    def content(self) -> {}:
        return self.__dict__

    def jsonify(self) -> {}:
        return jsonify(self.__dict__)
