from CanaWebAPI.entities.fieldentity import FieldEntity

from flask import current_app as app


class EntityCreator:
    @staticmethod
    def create_field_from_json(json_dict: dict):
        try:
            return FieldEntity(json_dict)
        except:
            app.logger.error("JSON message can not be translated to Field.")
            raise Exception("JSON message can not be translated to Field.")



