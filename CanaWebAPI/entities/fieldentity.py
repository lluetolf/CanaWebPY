from CanaWebAPI.entities.mongo_base_entity import MongoBaseEntity


class FieldEntity(MongoBaseEntity):
    def __init__(self, json_dict: dict):
        self.required = ['name', 'owner', 'size', 'cultivatedArea', 'acquisitionDate', 'ingenioId', 'lastUpdated']
        self.optional = ['_id']
        super().__init__(json_dict)
