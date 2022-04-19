import json

with open("src/assets/json/calles.json", "r") as infile:
    calles = json.load(infile)

calles_new = []
for calle in calles:
    calles_new.append(calle["nombre"])

with open("src/assets/json/nombres_calles.json", "w") as outfile:
    json.dump(calles_new, outfile)
