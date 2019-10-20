from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ingresos:
    pre_liquidacion: float
    liquidacion: float
    ajuste: float





@dataclass_json
@dataclass
class Liquidacion:
    id: int
    year: int
    rancho: int
    tons: float
    ingenio_file_id: int
    ingresos: Ingresos
    deductiones: Deductiones





