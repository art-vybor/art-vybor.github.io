//-------------------------------------------------------
//----------- Global variables --------------------------
//-------------------------------------------------------

var camera, controls, renderer, scene;
var container, stats, projector;

var objectMap, objectMapKeys;

var KINDS_OF_MODE = ['ribbon', 'balls', 'lightBonds', 'ballsAndBonds', 'bonds']

var RESTRICTION = {
	'ribbon': 1000000,
	'balls': 5000,
	'lightBonds': 5000,
	'ballsAndBonds': 1000,
	'bonds': 1000,	
}

RESTRICTION.check = function(molecule, mode) {
	return true;
	//if (mode in restriction) return true;
	if (molecule.atoms.length > RESTRICTION[mode]) return false;
	return true;
}

RESTRICTION.toString = function() {
	function getRestrictionRow(str) {
		return str + '    ' + RESTRICTION[str] + '\n'
	}

	var res = '';
	for (i in KINDS_OF_MODE)
		res += getRestrictionRow(KINDS_OF_MODE[i]);

	return res
}
//-------------------------------------------------------
//----------- Draw functions ----------------------------
//-------------------------------------------------------

function draw(scene, molecule) {
	objectMap = {}
	objectMapKeys = []

	var atoms = []

	for (var i in molecule.atoms) {
		if (!molecule.atoms[i].hetflag)
    		atoms.push(molecule.atoms[i].serial);
   	}
   	colorByChain(molecule, atoms);


	if (mode == 'balls') {		
		drawBalls(scene, molecule, atoms, quality);
	} else if (mode == 'lightBonds') {
		drawBonds(scene, molecule, atoms, false, quality, true);
	} else if (mode == 'bonds') {
		drawBonds(scene, molecule, atoms, false, quality, false);
	} else if (mode == 'ballsAndBonds') {
		drawBonds(scene, molecule, atoms, true, quality);
	} else if (mode == 'ribbon') {
		drawRibbonExperimental(scene, molecule, atoms);
	}

	if (hetAtomFlag) {
		atoms = []

		for (var i in molecule.atoms) {
			if (molecule.atoms[i].hetflag) {
    			atoms.push(molecule.atoms[i].serial);	
    		}
   		}	

   		if (mode == 'balls') {		
			drawBalls(scene, molecule, atoms, quality);
		} else if (mode == 'lightBonds') {
			drawBonds(scene, molecule, atoms, false, quality, true);
		} else if (mode == 'bonds') {
			drawBonds(scene, molecule, atoms, false, quality, false);
		} else if (mode == 'ballsAndBonds') {
			drawBonds(scene, molecule, atoms, true, quality);
		} else if (mode == 'ribbon') {
			drawBonds(scene, molecule, atoms, true, quality);
		}
	}

}
var TV3 = THREE.Vector3, TF3 = THREE.Face3, TCo = THREE.Color;

function colorByChain(molecule, atomlist, colorSidechains) {
   for (var i in atomlist) {
      var atom = molecule.atoms[atomlist[i]]; if (atom == undefined) continue;

      if (atom.hetflag) continue;
      if (colorSidechains || atom.name == 'CA' || atom.name == 'O3\'') {
         var color = new TCo(0);
         color.setHSL((atom.chain.charCodeAt(0) * 5) % 17 / 17.0, 1, 0.44);
         atom.color = color.getHex();
      }
   }
};

function drawRibbonExperimental(group, molecule, atomlist) {
	num = 2;
	div = 5;
	coilWidth = 0.3;
	fill = true;
	doNotSmoothen = false;
	helixSheetWidth = 1.3;
	thickness  = 1;
	var points = []; for (var k = 0; k < num; k++) points[k] = [];
	var colors = [];
	var currentChain, currentResi, currentCA;
	var prevCO = null; //ss=null, ssborder = false;
	for (var i in atomlist) {

		var atom = molecule.atoms[atomlist[i]];
		if (atom == undefined) continue;

		if ((atom.name == 'O' || atom.name == 'CA') && !atom.hetflag) {
			if (atom.name == 'CA') {
				if (currentChain != atom.chain || currentResi + 1 != atom.resSeq) {
					for (var j = 0; !thickness && j < num; j++)
						drawSmoothCurve(group, points[j], 1 ,colors, div);
					if (fill) drawStrip1(group, points[0], points[num - 1], colors, div, thickness);
					var points = []; for (var k = 0; k < num; k++) points[k] = [];
					colors = [];
					prevCO = null; //ss = null; ssborder = false;
				}
			currentCA = new TV3(atom.x, atom.y, atom.z);
			currentChain = atom.chain;
			currentResi = atom.resSeq;
			//ss = atom.ss; ssborder = atom.ssstart || atom.ssend;
			colors.push(atom.color);
			} else { // O
				var O = new TV3(atom.x, atom.y, atom.z);
				O.sub(currentCA);
				O.normalize(); // can be omitted for performance
				//O.multiplyScalar((ss == 'c') ? coilWidth : helixSheetWidth); 
				if (prevCO != undefined && O.dot(prevCO) < 0) O.negate();
				prevCO = O;
				for (var j = 0; j < num; j++) {
					var delta = -1 + 2 / (num - 1) * j;
					var v = new TV3(currentCA.x + prevCO.x * delta, 
						currentCA.y + prevCO.y * delta, currentCA.z + prevCO.z * delta);
					//if (!doNotSmoothen && ss == 's') v.smoothen = true;
					points[j].push(v);
				}                         
			}
		}
	}
	for (var j = 0; !thickness && j < num; j++)
		drawSmoothCurve(group, points[j], 1 ,colors, div);
	
	if (fill) this.drawStrip1(group, points[0], points[num - 1], colors, div, thickness);
};


function drawSmoothCurve(group, _points, width, colors, div) {
   if (_points.length == 0) return;

   div = (div == undefined) ? 5 : div;

   var geo = new THREE.Geometry();
   var points = this.subdivide(_points, div);

   for (var i = 0; i < points.length; i++) {
      geo.vertices.push(points[i]);
      geo.colors.push(new TCo(colors[(i == 0) ? 0 : Math.round((i - 1) / div)]));
  }
  var lineMaterial = new THREE.LineBasicMaterial({linewidth: width});
  lineMaterial.vertexColors = true;
  var line = new THREE.Line(geo, lineMaterial);
  line.type = THREE.LineStrip;
  group.add(line);
};

function drawStrip1(group, p1, p2, colors, div, thickness) {
   if ((p1.length) < 2) return;
   div = div || this.axisDIV;
   p1 = subdivide(p1, div);
   p2 = subdivide(p2, div);
   //if (true) return drawThinStrip(group, p1, p2, colors, div);

   var geo = new THREE.Geometry();
   var vs = geo.vertices, fs = geo.faces;
   var axis, p1v, p2v, a1v, a2v;
   for (var i = 0, lim = p1.length; i < lim; i++) {
      vs.push(p1v = p1[i]); // 0
      vs.push(p1v); // 1
      vs.push(p2v = p2[i]); // 2
      vs.push(p2v); // 3
      if (i < lim - 1) {
         var toNext = p1[i + 1].clone().sub(p1[i]);
         var toSide = p2[i].clone().sub(p1[i]);
         axis = toSide.cross(toNext).normalize().multiplyScalar(thickness);
      }
      vs.push(a1v = p1[i].clone().add(axis)); // 4
      vs.push(a1v); // 5
      vs.push(a2v = p2[i].clone().add(axis)); // 6
      vs.push(a2v); // 7
   }
   var faces = [[0, 2, -6, -8], [-4, -2, 6, 4], [7, 3, -5, -1], [-3, -7, 1, 5]];
   for (var i = 1, lim = p1.length; i < lim; i++) {
      var offset = 8 * i, color = new TCo(colors[Math.round((i - 1)/ div)]);
      for (var j = 0; j < 4; j++) {
         //var f = new THREE.Face4(offset + faces[j][0], offset + faces[j][1], offset + faces[j][2], offset + faces[j][3], undefined, color);
         Face4(fs, offset + faces[j][0], offset + faces[j][1], offset + faces[j][2], offset + faces[j][3], color);
         //fs.push(f);
      }
   }
   var vsize = vs.length - 8; // Cap
   for (var i = 0; i < 4; i++) {vs.push(vs[i * 2]); vs.push(vs[vsize + i * 2])};
   vsize += 8;
   Face4(fs, vsize, vsize + 2, vsize + 6, vsize + 4, fs[0].color);
   Face4(fs, vsize + 1, vsize + 5, vsize + 7, vsize + 3, fs[fs.length - 3].color);
   geo.computeFaceNormals();
   geo.computeVertexNormals(false);
   var material =  new THREE.MeshLambertMaterial();
   material.vertexColors = THREE.FaceColors;
   material.side = THREE.DoubleSide;
   var mesh = new THREE.Mesh(geo, material);
   group.add(mesh);
};

function Face4(geo, a,b,c,d, color) {
	var f = new THREE.Face3(a,b,c, undefined, color);
	geo.push(f);
	f = new THREE.Face3(a, c,d, undefined, color);
	geo.push(f);

}

function drawBalls(scene, molecule, atoms, quality) {
	for (var i in atoms) {
		var atom = molecule.atoms[atoms[i]];
		addToObjectMap(addAtom(scene, atom, quality), atom);			
	}
}

function drawBonds(scene, molecule, atoms, withBalls, quality, lightBonds) {	
	var nAtoms = atoms.length;

	for (var _i = 0; _i < nAtoms; _i++) {
		var i = atoms[_i];
		var  atom = molecule.atoms[i];
		if (atom == undefined) continue;
		for (var _j = _i + 1; _j < _i + 30 && _j < nAtoms; _j++) {
			var j = atoms[_j];
			var bondAtom = molecule.atoms[j];
			if (bondAtom == undefined) continue;

			if (isConnected(atom, bondAtom))
				if (!lightBonds)
					addStickSub(scene, atom, bondAtom, withBalls, quality);
				else
					addLightStickSub(scene, atom, bondAtom);
		}
		for (var _j = 0; _j < atom.bonds.length; _j++) {
			var j = atom.bonds[_j];
			if (j < i + 30) continue; // be conservative!
			if (atoms.indexOf(j) == -1) continue;
			var bondAtom = molecule.atoms[j];
			if (bondAtom == undefined) continue;

			if (!lightBonds)
				addStickSub(scene, atom, bondAtom, withBalls, quality);
			else
				addLightStickSub(scene, atom, bondAtom);
		}
    }
}

function drawRibbon(scene, molecule, atomlist) {
	var coilWidth = 0.3;
	var div = 5;
	var helixSheetWidth = 1.3
	var points = []; for (var k = 0; k < 2; k++) points[k] = [];
	var currentCA, prevPosition, currentChain, currentResSeq;
	ss=null;

	for (var i in atomlist) {
		var atom = molecule.atoms[atomlist[i]];

		if ((atom.name == 'O' || atom.name == 'CA') && !atom.hetflag) {
			var atomPosition = new THREE.Vector3(atom.x, atom.y, atom.z);

			if (atom.name == 'CA') {
				 if (currentChain != atom.chain || currentResSeq + 1 != atom.resSeq) {
				 	var points = []; for (var k = 0; k < 2; k++) points[k] = [];
				 	ss = null; prevPosition = null;
				 }
				ss = atom.ss;			 
				currentChain = atom.chain;
            	currentResSeq = atom.resSeq;
				//var points = []; for (var k = 0; k < 2; k++) points[k] = [];
				currentCA = atomPosition;
			} else if (currentCA != undefined){ // O
				atomPosition = new THREE.Vector3().subVectors(atomPosition, currentCA);
				atomPosition.normalize();
				atomPosition.multiplyScalar((ss == 'c') ? coilWidth : helixSheetWidth); 

				if (prevPosition != undefined && atomPosition.dot(prevPosition) < 0) atomPosition.negate();

				points[0].push(new THREE.Vector3().copy(atomPosition).multiplyScalar(-1).add(currentCA));
				points[1].push(new THREE.Vector3().copy(atomPosition).multiplyScalar(1).add(currentCA));

				prevPosition = atomPosition;
			}
		}
	}
	a = THREE.Object3D();
	this.drawStrip(scene, points[0], points[1], div);
	scene.add(a);
}

function drawStrip(scene, p1, p2, div) {
    if ((p1.length) < 2) return;

   	p1 = subdivide(p1, div);
   	p2 = subdivide(p2, div);

	var geo = new THREE.Geometry();
	for (var i = 0, lim = p1.length; i < lim; i++) {
		geo.vertices.push(p1[i]);
		geo.vertices.push(p2[i]);
	}

	for (var i = 1, lim = p1.length; i < lim; i++) {
		var f = new THREE.Face3(2 * i, 2 * i + 1, 2 * i - 1);
		geo.faces.push(f);
		f = new THREE.Face3(2 * i, 2 * i - 1, 2 * i - 2);
		geo.faces.push(f);
	}
	geo.computeFaceNormals();
	geo.computeVertexNormals(false);
	var material =  new THREE.MeshLambertMaterial({color:0xff9966});
	material.side = THREE.DoubleSide;
	var mesh = new THREE.Mesh(geo, material);
	
	scene.add(mesh);
};

function addStickSub(scene, atom1, atom2, withBalls, quality) {	
	var point1 = new THREE.Vector3(atom1.x, atom1.y, atom1.z);
	var point2 = new THREE.Vector3(atom2.x, atom2.y, atom2.z);
	
	var center = point2.clone().add(point1).multiplyScalar(0.5);

	addCylinder(scene, point1, center, atom1.getColor(), quality);
	addCylinder(scene, point2, center, atom2.getColor(), quality);	

	if (withBalls) {
		addToObjectMap(addAtom(scene, atom1, quality, 0.3), atom1);
		addToObjectMap(addAtom(scene, atom2, quality, 0.3), atom2);	
	} else {
		addAtom(scene, atom1, quality, 0.1);
		addAtom(scene, atom2, quality, 0.1);
	}
}

function addLightStickSub(scene, atom1, atom2) {	
	var point1 = new THREE.Vector3(atom1.x, atom1.y, atom1.z);
	var point2 = new THREE.Vector3(atom2.x, atom2.y, atom2.z);
	
	var center = point2.clone().add(point1).multiplyScalar(0.5);
	addLine(scene, point1, center, atom1.getColor())
	addLine(scene, point2, center, atom2.getColor())
}


function isConnected(atom, bondAtom) {
	var s = atom.bonds.indexOf(bondAtom.serial);
   	if (s != -1) return true;

	var distSquared = Math.pow((atom.x - bondAtom.x), 2) + Math.pow((atom.y - bondAtom.y), 2) + Math.pow((atom.z - bondAtom.z), 2);                     
    
    if (isNaN(distSquared)) return false;
   	if (distSquared < 0.5) return false;
   	if (distSquared > 1.3 && (atom.element == 'H' || bondAtom.element == 'H' || atom.element == 'D' || bondAtom.element == 'D')) return false;
   	if (distSquared < 3.42 && (atom.element == 'S' || bondAtom.element == 'S')) return true;
   	if (distSquared > 2.78) return false;

	return true;
}

function addAtom(scene, atom, quality, radius) {
	if (radius == undefined)
		radius = atom.getRadius();

	var material = new THREE.MeshLambertMaterial({ color: atom.getColor() });
	var geometry = new THREE.SphereGeometry(radius, getSphereQuality(quality), getSphereQuality(quality));
	var atomMesh = new THREE.Mesh(geometry, material);
	atomMesh.position.set(atom.x, atom.y, atom.z);
	scene.add(atomMesh);

	return atomMesh;
}

function addLine(scene, point1, point2, color) {
	var material = new THREE.LineBasicMaterial({'color': color});	
	var geometry = new THREE.Geometry();
	geometry.vertices.push(point1.clone());
	geometry.vertices.push(point2.clone());
	var line = new THREE.Line(geometry, material);

	scene.add(line)
}

function addCylinder(scene, point1, point2, color, quality) {
	var length = point2.clone().sub(point1).length();	

	var material = new THREE.MeshLambertMaterial({'color': color});	
	var geometry = new THREE.CylinderGeometry(0.1, 0.1, length,  getStickQuality(quality));	
	var cylinderMesh = new THREE.Mesh(geometry, material);

	var position = point1.clone().add(point2).multiplyScalar(0.5);
	cylinderMesh.position.copy(position);

	//rotate
	var direction = point1.clone().sub(point2); 
	var angle = cylinderMesh.up.angleTo(direction);
	var axis = cylinderMesh.up.cross(direction)
	cylinderMesh.rotateOnAxis(axis.normalize(), angle);

	scene.add(cylinderMesh)
}

//-------------------------------------------------------
//----------- Renderer functions ------------------------
//-------------------------------------------------------

function buildSceneAndDraw(molecule) {
	dislayMoleculeInformation(molecule);

	if (!RESTRICTION.check(molecule, mode)) {
		alert('Некорректный режим. В выбранной вами молекуле ' + molecule.atoms.length + ' атомов. Выберите режим, который поддерживает больше чем ' 
			+ molecule.atoms.length + ' атомов.\nТаблица ограничений (режим, максимальное количество атомов):\n' + RESTRICTION);
		return;
	}

	// create a scene
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2(0xcccccc, 0.002 );

	// set a camera
	camera = new THREE.PerspectiveCamera(45, getWidth('drawDiv') / getHeight('drawDiv'), 1, 1000 ); 
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 100;
	scene.add( camera );
  
  	//set controls
	controls = new THREE.TrackballControls( camera, container );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = false;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];
	controls.addEventListener( 'change', render );
 
 	//set light
	var light = new THREE.HemisphereLight(0xFFFFFF, 0x777777);
	scene.add( light );	
	
	//init render
	renderer = new THREE.WebGLRenderer( { antialias: antialiasFlag } );
	renderer.setClearColor( 0xCCCCCC, 1 );	
	renderer.setSize(getWidth('drawDiv'), getHeight('drawDiv')-5);

	//set domElements
	container = document.getElementById('drawDiv');
	//clear container	
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}
	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	stats.domElement.style.zIndex = 100;
	container.appendChild( stats.domElement );

	projector = new THREE.Projector();

	//add events
	container.addEventListener( 'mousedown', onDocumentMouseDown, false );
	window.addEventListener( 'resize', onWindowResize, false );

	draw(scene, molecule);
}

function onDocumentMouseDown( event ) {
	event.preventDefault();

	var vector = new THREE.Vector3((event.offsetX / getWidth('drawDiv')) * 2 - 1, - (event.offsetY / getHeight('drawDiv')) * 2 + 1, 0.5);
	projector.unprojectVector(vector, camera);

	var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

	var intersects = raycaster.intersectObjects(objectMapKeys);

	if (intersects.length > 0) {
		//intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
		dislayAtomInformation(objectMap[intersects[0].object.id]);
		render();
	}
}

function dislayAtomInformation(atom) {
	atomDiv = document.getElementById('atomData');
	while (atomDiv.firstChild) {
	    atomDiv.removeChild(atomDiv.firstChild);
	}
	if (atom.hetflag) {
		atomDiv.appendChild(getAtomProperty('Element (HetAtom)', atom.element));
	} else {
		atomDiv.appendChild(getAtomProperty('Element', atom.element));
	}
	atomDiv.appendChild(getAtomProperty('X', atom.x));
	atomDiv.appendChild(getAtomProperty('Y', atom.y));
	atomDiv.appendChild(getAtomProperty('Z', atom.z));
	atomDiv.appendChild(getAtomProperty('serial', atom.serial));
}

function getAtomProperty(name, data) {
	return getProperty(name, data, 'atomProperty');
}

function getProperty(name, data, id) {
	var propertyDiv = document.createElement('div');
	propertyDiv.id = id;
	propertyDiv.innerHTML = name + ': ' + data;
	return propertyDiv;
}

function dislayMoleculeInformation(molecule) {
	molDiv = document.getElementById('moleculeData');
	while (molDiv.firstChild) {
	    molDiv.removeChild(molDiv.firstChild);
	}
	molDiv.appendChild(getMolProperty('Atoms count', molecule.atoms.length));
	molDiv.appendChild(getMolProperty('Class', molecule.classification));
	molDiv.appendChild(getMolProperty('PDB id', molecule.idCode));
}

function getMolProperty(name, data) {
	return getProperty(name, data, 'molProperty');
}

function onWindowResize() {
	container = document.getElementById('drawDiv');
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}
	renderer.setSize(getWidth('drawDiv'), getHeight('drawDiv')-5);
	container.appendChild( renderer.domElement );
	container.appendChild( stats.domElement );

	camera.aspect = getWidth('drawDiv') / getHeight('drawDiv');
	camera.updateProjectionMatrix();

	controls.handleResize();

	render();

}

function render() {
	renderer.render(scene, camera);
	stats.update();
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
}


//-------------------------------------------------------
//----------- Support functions -------------------------
//-------------------------------------------------------

function getSphereQuality(quality) {
	switch(quality) {
		case 'low':
			return 8;
		case 'medium':
			return 10;
		case 'high':
			return 25;
		default:
			return getSphereQuality('medium');
	}
}

function getStickQuality(quality) {
	switch(quality) {
		case 'low':
			return 5;
		case 'medium':
			return 7;
		case 'high':
			return 10;
		default:
			return getStickQuality('medium');
	}
}

function getWidth(id) {
	container = document.getElementById(id);
	containerStyle = window.getComputedStyle(container);
	return parseInt(containerStyle.width);
}

function getHeight(id) {
	container = document.getElementById(id);
	containerStyle = window.getComputedStyle(container);
	return parseInt(containerStyle.height);
}

function subdivide(_points, DIV) { // points as Vector3
   var ret = [];
   var points = _points;
   points = new Array(); // Smoothing test
   points.push(_points[0]);
   for (var i = 1, lim = _points.length - 1; i < lim; i++) {
      var p1 = _points[i], p2 = _points[i + 1];
      if (p1.smoothen) points.push(new THREE.Vector3((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2));
      else points.push(p1);
   }
   points.push(_points[_points.length - 1]);

   for (var i = -1, size = points.length; i <= size - 3; i++) {
      var p0 = points[(i == -1) ? 0 : i];
      var p1 = points[i + 1], p2 = points[i + 2];
      var p3 = points[(i == size - 3) ? size - 1 : i + 3];
      var v0 = new THREE.Vector3().sub(p2, p0).multiplyScalar(0.5);
      var v1 = new THREE.Vector3().sub(p3, p1).multiplyScalar(0.5);
      for (var j = 0; j < DIV; j++) {
         var t = 1.0 / DIV * j;
         var x = p1.x + t * v0.x 
                  + t * t * (-3 * p1.x + 3 * p2.x - 2 * v0.x - v1.x)
                  + t * t * t * (2 * p1.x - 2 * p2.x + v0.x + v1.x);
         var y = p1.y + t * v0.y 
                  + t * t * (-3 * p1.y + 3 * p2.y - 2 * v0.y - v1.y)
                  + t * t * t * (2 * p1.y - 2 * p2.y + v0.y + v1.y);
         var z = p1.z + t * v0.z 
                  + t * t * (-3 * p1.z + 3 * p2.z - 2 * v0.z - v1.z)
                  + t * t * t * (2 * p1.z - 2 * p2.z + v0.z + v1.z);
         ret.push(new THREE.Vector3(x, y, z));
      }
   }
   ret.push(points[points.length - 1]);
   return ret;
}

function addToObjectMap(key, value) {
	objectMap[key.id] = value;
	objectMapKeys.push(key);
}


function MoleculeStorage() {
	var idToMolecule = {};
	var idToVisibility = {};
	var newId = 1;

	this.add = function(molecule) { 
		idToMolecule[newId] = molecule;
		idToVisibility[newId]=  true;
		newId++;
	}

	this.remove = function(id) { 
		if (id in idToVisibility) {
			delete idToMolecule[id];
			delete idToVisibility[id];	
		}		
	}

	this.getAllId = function() {
		result = [];
		for (var id in idToVisibility) {
			result.push(id);
		}

		return result;
	}

	this.getAllVisible = function() {
		result = [];
		for (var id in idToVisibility) {
			if (idToVisibility[id]) {
				result.push(idToMolecule[id]);
			}
		}

		return result;
	}

	this.setVisibility = function(id, value) {
		if (id in idToVisibility) {
			idToVisibility[id] = value;
		}
	}

	this.getVisibility = function(id) {
		if (id in idToVisibility) {
			return idToVisibility[id];
		} else {
			return false;
		}
	}
}

function MoleculeRender() {
	var moleculeStorage = new MoleculeStorage();
	var scene, camera, controls, renderer, container, stats, projector;
	var drawDivName;

	this.getMoleculeStorage = function() {
		return moleculeStorage;
	}

	this.init = function(_drawDivName) {
		drawDivName = _drawDivName;
		// create a scene
		scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

		// set a camera
		camera = new THREE.PerspectiveCamera(45, getWidth(drawDivName) / getHeight(drawDivName), 1, 1000); 
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 100;
		scene.add( camera );
	  
	  	//set controls
		controls = new THREE.TrackballControls(camera, container);
		controls.rotateSpeed = 1.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;
		controls.noZoom = false;
		controls.noPan = false;
		controls.staticMoving = false;
		controls.dynamicDampingFactor = 0.3;
		controls.keys = [ 65, 83, 68 ];
		controls.addEventListener('change', render);
	 
	 	//set light
		var light = new THREE.HemisphereLight(0xFFFFFF, 0x777777);
		scene.add( light );	
		
		//init render
		renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setClearColor(0xCCCCCC, 1);	
		renderer.setSize(getWidth(drawDivName), getHeight(drawDivName) - 5);

		//set domElements
		clearDomContainer(drawDivName);
		container.appendChild(renderer.domElement);

		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		stats.domElement.style.zIndex = 100;
		container.appendChild( stats.domElement );

		projector = new THREE.Projector();

		//add events
		container.addEventListener('mousedown', onDocumentMouseDown, false);
		window.addEventListener('resize', onWindowResize, false);
	}

	this.draw = function() {
		; //draw molecule from moleculeList
	}

	var onWindowResize = function() {
		clearDomContainer(drawDivName);

		renderer.setSize(getWidth(drawDivName), getHeight(drawDivName) - 5);
		container.appendChild(renderer.domElement);
		container.appendChild(stats.domElement);

		camera.aspect = getWidth(drawDivName) / getHeight(drawDivName);
		camera.updateProjectionMatrix();

		controls.handleResize();

		render();

	}

	var render = function() {
		renderer.render(scene, camera);
		stats.update();
	}

	var onDocumentMouseDown = function(event) {
		event.preventDefault();

		var vector = new THREE.Vector3((event.offsetX / getWidth('drawDiv')) * 2 - 1, - (event.offsetY / getHeight('drawDiv')) * 2 + 1, 0.5);
		projector.unprojectVector(vector, camera);

		var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

		var intersects = raycaster.intersectObjects(objectMapKeys);

		if (intersects.length > 0) {
			render();
		}
	}
}

function clearDomContainer(containerName) {
	container = document.getElementById(containerName);
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}
}