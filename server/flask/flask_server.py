from crossdomain import crossdomain
from flask import Flask
from flask import request

import pybel

MOLECULE_TYPE = {'smi', 'mol'}

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
@crossdomain(origin='*')
def convertToPdbApp():

    def convertToPdb(moleculeData, moleculeType):
        try:
        	mol = pybel.readstring(moleculeType, moleculeData)
        	mol.make3D()
        	return mol.write("pdb")
        except:
        	return 'ERROR: Incorrect data'

    if request.method == 'POST':
        moleculeType = str(request.form['type'])
        moleculeData = str(request.form['data'])

        if moleculeType in MOLECULE_TYPE:
            return convertToPdb(moleculeData, moleculeType)
        else:
            return 'ERROR: Incorrect type'

    return 'Try to using POST method'

if __name__ == '__main__':
    app.run()


