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
class Deductiones:
    fid_garant__liq_sca: float
    socas_y_res: float
    corte_soca: float
    alce_soca: float
    acarreo_soca: float
    otros_gastos_de_cosecha: float
    est_gastos_dist_soca: float
    est_gastos_de_grupo: float
    est_imss_prod_y_cortadore: float


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





