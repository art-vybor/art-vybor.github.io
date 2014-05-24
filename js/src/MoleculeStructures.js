 function Atom(hetflag, serial, name, chain, resSeq, x, y ,z, element) {
 	this.hetflag = hetflag;
 	this.serial = serial;
	this.name = name;
	this.chain = chain;
	this.resSeq = resSeq;
	this.x = x;
	this.y = y;
	this.z = z;
	this.element = element;
	this.bonds = [];	

	this.getColor = function() {
		if (CPK[this.element]['color'])
			return '#' + CPK[this.element]['color'];
		else {
			console.log('unrecognized color in atom: ' + this.element);
			return '#000000';
		}	

	};

	this.getRadius = function() {
		if (CPK[this.element]['color'])
			return parseInt(CPK[this.element]['size'], 10) * 1.0 / 100;
		else {
			console.log('unrecognized radius in atom: ' + this.element);
			return 1;
		}	
	};

	this.toString = function() {
		return this.element + ' \t' + this.x + ' \t' + this.y + ' \t' + this.z;
	};
}

function Molecule () {
	this.atoms = [];

	this.parsePDBFile = function(file) {
		var lines = file.split('\n');
		
		for (var i in lines) {
			this.parsePDBLine(lines[i]);
		}

	};

	this.parsePDBLine = function(line) {
		//http://www.wwpdb.org/documentation/format33/sect9.html#ATOM
		recordName = line.substring(0, 6).trim();
		if (recordName == "ATOM" || recordName == "HETATM") {			
			var hetflag = line[0] == 'H' ? true : false;

			var serial = parseInt(line.substr(6, 5));						
			var name = line.substr(12, 4).trim();	
			var chain = line.substr(21, 1);
			var resSeq = parseInt(line.substr(22, 4));
			var x = parseFloat(line.substr(30, 8));
			var y = parseFloat(line.substr(38, 8));
			var z = parseFloat(line.substr(46, 8));

			var element = line.substr(76, 2).trim();
			if (element == '') element = name; // for some incorrect PDB files
			var atom = new Atom(hetflag, serial, name, chain, resSeq, x, y ,z, element);

			this.atoms[serial] = atom;

		} else if (recordName == "CONECT") {
			var from = parseInt(line.substr(6, 5));

			for (var j = 0; j < 4; j++) {
				var to = parseInt(line.substr([11, 16, 21, 26][j], 5));
				if (isNaN(to)) continue;

				if (this.atoms[from] != undefined) {
			  		this.atoms[from].bonds.push(to);
				}
			}
		}
	};

	this.getCenter = function() {
		var x = 0, y = 0, z = 0;
		for (var i in this.atoms) {
			x += this.atoms[i].x;
			y += this.atoms[i].y;
			z += this.atoms[i].z;
		}
		var len = this.atoms.length;
		return new THREE.Vector3(x/len, y/len, z/len);
	};
	
	this.moveToCenter = function() {
		center = this.getCenter();
		for (var i in this.atoms) {
			this.atoms[i].x -= center.x;
			this.atoms[i].y -= center.y;
			this.atoms[i].z -= center.z;
		}
	};
	
	this.toString = function() {
	   var result = '';
		
		for (var i in this.atoms) {
			result += this.atoms[i] + '<br \>';
		}
		return result;
	};

}