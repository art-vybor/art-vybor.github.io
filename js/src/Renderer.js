//-------------------------------------------------------
//----------- Global variables --------------------------
//-------------------------------------------------------

var camera, controls, renderer, scene;
var container, stats, projector;

var objects = [];


//-------------------------------------------------------
//----------- Draw functions ----------------------------
//-------------------------------------------------------

function draw(scene, molecule) {
	objects = []
	var atoms = []

	for (var i in molecule.atoms) {
    	atoms.push(molecule.atoms[i].serial);
   	}

	if (mode == 'balls') {		
		drawBalls(scene, molecule, quality);	
	} else if (mode == 'bonds') {
		drawBonds(scene, molecule, atoms, false, quality);
	} else if (mode == 'ballsAndBonds') {
		drawBonds(scene, molecule, atoms, true, quality);
	} else if (mode == 'ribbon')
		drawRibbon(scene, molecule, atoms);
}

function drawRibbon(scene, molecule, atomlist) {
	num = 2;
	var points = []; for (var k = 0; k < num; k++) points[k] = [];
	var colors = [];
	var currentChain, currentResi, currentCA;
	var prevCO = null, ss=null, ssborder = false;

	for (var i in atomlist) {
		var atom = molecule.atoms[atomlist[i]];		

		if (atom == undefined) continue;

		if ((atom.name == 'O' || atom.name == 'CA') && !atom.hetflag) {
			if (atom.name == 'CA') {

				currentCA = new THREE.Vector3(atom.x, atom.y, atom.z);
				currentChain = atom.chain;
				currentResi = atom.resi;
			} else { // O
				var O = new THREE.Vector3(atom.x, atom.y, atom.z);
				O.sub(currentCA);
				O.normalize();
				if (prevCO != undefined && O.dot(prevCO) < 0) O.negate();
				prevCO = O;
				for (var j = 0; j < num; j++) {
					var delta = -1 + 2 / (num - 1) * j;
					var v = new THREE.Vector3(currentCA.x + prevCO.x * delta, 
					currentCA.y + prevCO.y * delta, currentCA.z + prevCO.z * delta);
					points[j].push(v);
				}                         
			}
		}
	}
	a = THREE.Object3D();
	this.drawStrip(scene, points[0], points[num - 1]);
	scene.add(a);
}

function drawBalls(scene, molecule, quality) {
	objects = []	
	
	for (var i in molecule.atoms) {
			var atom = molecule.atoms[i];
			objects.push(addAtom(scene, atom, quality));			
	}
}

function drawBonds(scene, molecule, atoms, scale, quality) {	
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
				addStickSub(scene, atom, bondAtom, scale, quality);
		}
		for (var _j = 0; _j < atom.bonds.length; _j++) {
			var j = atom.bonds[_j];
			if (j < i + 30) continue; // be conservative!
			if (atoms.indexOf(j) == -1) continue;
			var bondAtom = molecule.atoms[j];
			if (bondAtom == undefined) continue;
			addStickSub(scene, atom, bondAtom, scale, quality);
		}
    }
}

function drawStrip(scene, p1, p2) {
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
		objects.push(addAtom(scene, atom1, quality, 0.3));
		objects.push(addAtom(scene, atom2, quality, 0.3));	
	} else {
		addAtom(scene, atom1, quality, 0.1);
		addAtom(scene, atom2, quality, 0.1);
	}
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
	controls.staticMoving = true;
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

	var intersects = raycaster.intersectObjects(objects);

	if (intersects.length > 0) {
		intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
		render();
	}
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
			return 20;
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