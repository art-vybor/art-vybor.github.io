import csv
import json

dict_CPK = {}

with open('pt-data2.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')    
    for row in reader:
        dict_CPK[row[1].strip().upper()] = {'color' : row[4].strip(), 'size' : row[7].strip()}

with open('js/src/CPK.js', mode='w', encoding='utf-8') as f:
    data = json.dumps(dict_CPK);
    print('var CPK = %s;' % data, file=f)
    print(data)
    
    
        
