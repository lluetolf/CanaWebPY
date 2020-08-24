import os
import re
import unicodedata

if os.getcwd().find('documentation'):
    os.chdir('..')


def strip_accents(s):
    return ''.join(line for line in unicodedata.normalize('NFD', s) if unicodedata.category(line) != 'Mn')


def transform_cargo_to_dict(line: str):
    try:
        x = re.match(r'\*?\s?([A-z /,.:()]*)\s?\$?\s?([0-9,.]+)?\s?([0-9,.]+)?\s?([0-9,.]+)?\$?$', line)
        to_remove = [',', '!', '.', ';', '(', ')', '/', ':']
        item = x.groups()[0].strip().lower().replace(" ", '_').translate({ord(x): '' for x in to_remove})
        tmp_list = [x.groups()[i] if x.groups()[i] is not None else '0.0' for i in range(1, 4)]

        tmp_list = list(map(lambda a: float(a.replace(',', '')), tmp_list))
        tmp_list.sort(reverse=True)

        return {
            item: {
                "capital": tmp_list[1],
                "intereses": tmp_list[2] if len(tmp_list) > 2 else None,
                "total": tmp_list[0]
            }
        }
    except Exception as e:
        print("Here it failed. {}".format(str(e)))
        return None


files = list(filter(lambda a: a.startswith('final'), os.listdir('data/2020/')))
extract = []
for f in files:
    lines = strip_accents(open('data/2020/' + f, 'r', encoding="utf-8").read()).split('\n')
    del f

    lines[0] += lines.pop(1)
    lines[1] += lines.pop(2)
    lines[2].replace('FECH', 'FECHA')
    lines.pop(3)
    lines[3] += lines.pop(4)
    lines[5] += lines.pop(6)
    lines[6] += lines.pop(7)
    lines[7] = "INGRESOS TOTALES LIQUIDATION_FINAL"
    lines.pop(8)
    lines.pop(14)
    tmp = lines[15].split('$')
    lines[15] = "* Importe de cana quedada masa comun $" + tmp[1]
    lines.pop(16)
    lines[16] = re.sub(' ([A-Z])', r'\g<1>', lines[16])  # T O T A L D E I N G R E S O S
    del lines[18:27]
    index = lines[25].find('Corte')
    tmp = lines.pop(24)
    lines[24] = lines[24][:2] + lines[24][index:] + " " + tmp + " " + lines[24][2:index - 1]
    del index
    lines[28] = lines[28].replace(' a ', ' a ' + lines.pop(29) + " ")
    lines[45] = lines[45].replace('cana', 'cana ' + lines.pop(46))

    header = {"1": lines[2], "2": lines[5]}
    ingresos_list = lines[7:17]
    cargos_list = lines[17:50]
    del lines

    ingresos = {}
    ingresos_list.pop(0)
    for c in ingresos_list:
        ingresos.update(transform_cargo_to_dict(c))
    del ingresos_list

    cargos = {}
    cargos_list.pop(0)
    for c in cargos_list:
        cargos.update(transform_cargo_to_dict(c))
    del cargos_list

    extract.append({'header': header, 'cargos': cargos, 'ingresos': ingresos})

print("Hello")
