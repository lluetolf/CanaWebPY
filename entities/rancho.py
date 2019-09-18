from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Rancho:
    id: int
    name: str
    size: float
    cultivated: float
    ingenio_id: int
