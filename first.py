import json
from pathlib import Path


def write_json_file(data):
    with open("data_file.json", "w") as write_file:
        json.dump(data, write_file)


def read_json_file(file):
    if file.is_file():
        with open(file, "r") as read_file:
            return json.load(read_file)
    else:
        print("Couldn't open file: " + file)
        return None


print("Read data:")
ranchos_file_name = "ranchos.json"
liquidaciones_file_name = 'liquidaciones.json'
data_folder = Path("data/")

print("Read ranchos:")
file_to_open = data_folder / ranchos_file_name
data = read_json_file(file_to_open)
all_ranchos = [Rancho.from_json(json.dumps(r)) for r in data]

print("Read liquidaciones:")
file_to_open = data_folder / liquidaciones_file_name
data = read_json_file(file_to_open)
all_liquidaciones = [Liquidacion.from_json(json.dumps(r)) for r in data]

