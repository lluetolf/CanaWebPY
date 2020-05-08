from CanaWebAPI.entities.field import Field

from flask import current_app as app


class EntityCreator:
    @staticmethod
    def create_field_from_json(json_dict: dict):
        # Ensure all required attributes are there and all others are listed in optional
        if all(elem in json_dict for elem in Field.required) and all(elem in Field.required + Field.optional for elem in json_dict):
            return Field(json_dict)
        else:
            app.logger.error("JSON message can not be translated to Field.")
            raise Exception("JSON message can not be translated to Field.")



