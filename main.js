import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { 
  canvas: document.querySelector('#bg'), 
} );

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

const geometry = new THREE.TorusGeometry ( 10, 3, 16, 100 )
const material = new THREE.MeshStandardMaterial( {color: 0x000000} );
const torus = new THREE.Mesh( geometry, material );

// scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);


function addStar(){
  const geometry = new THREE.SphereGeometry(0.15, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh(geometry, material);
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

const jacobTexture = new THREE.TextureLoader().load('Jacob_Formal.jpg');
const cubeSize = 40;
const Jacob = new THREE.Mesh(
  new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),
  new THREE.MeshBasicMaterial( {map: jacobTexture} )
)
scene.add(Jacob)

Jacob.position.z = -50;
Jacob.position.x = 30;
Jacob.position.y = 0;

const tetrisSize = 2;
const tetrisTexture = new THREE.TextureLoader().load('tetris.jpg');
const Tetris = new THREE.Mesh(
  new THREE.BoxGeometry(tetrisSize, tetrisSize, tetrisSize),
  new THREE.MeshBasicMaterial( {map: tetrisTexture} )
)
scene.add(Tetris)
Tetris.position.z = 4
Tetris.position.x = 2;
Tetris.position.y = 0;

const ticSize = 3;
const tictactoeTexture = new THREE.TextureLoader().load('tictactoe.jpg');
const TicTacToe = new THREE.Mesh(
  new THREE.BoxGeometry(ticSize, ticSize, ticSize),
  new THREE.MeshBasicMaterial( {map: tictactoeTexture} )
)
scene.add(TicTacToe)
TicTacToe.position.z = 9
TicTacToe.position.x = -2;
TicTacToe.position.y = 0;

const bruceSize = 1;
const bruceschneierTexture= new THREE.TextureLoader().load('BruceSchneier.jpg');
const BruceSchneier = new THREE.Mesh(
  new THREE.BoxGeometry(bruceSize, bruceSize, bruceSize),
  new THREE.MeshBasicMaterial( {map: bruceschneierTexture} )
)
scene.add(BruceSchneier)
BruceSchneier.position.z = 15.5
BruceSchneier.position.x = 2.1;
BruceSchneier.position.y = 0.15;

const securedropSize = 2;
const securedropTexture= new THREE.TextureLoader().load('SecureDrop.jpg');
const SecureDrop = new THREE.Mesh(
  new THREE.BoxGeometry(securedropSize, securedropSize, securedropSize),
  new THREE.MeshBasicMaterial( {map: securedropTexture} )
)
scene.add(SecureDrop)
SecureDrop.position.z = 20
SecureDrop.position.x = 2.6;
SecureDrop.position.y = -0.05;

const cSize = 0.5;
const cppSize = 0.75;
const htmlSize = 0.4;
const javaSize = 1.5;
const javascriptSize = 0.75;
const phpSize = 0.5;
const pythonSize = 1.5;
const swiftSize = 0.75;
const cTexture= new THREE.TextureLoader().load('c.png');
const cppTexture= new THREE.TextureLoader().load('cpp.jpg');
const htmlTexture= new THREE.TextureLoader().load('html.png');
const javaTexture= new THREE.TextureLoader().load('java.png');
const javascriptTexture= new THREE.TextureLoader().load('javascript.png');
const phpTexture= new THREE.TextureLoader().load('php.jpg');
const pythonTexture= new THREE.TextureLoader().load('python.png');
const swiftTexture= new THREE.TextureLoader().load('swift.png');
const c = new THREE.Mesh(new THREE.BoxGeometry(cSize, cSize, cSize),new THREE.MeshBasicMaterial( {map: cTexture} ))
const cpp = new THREE.Mesh(new THREE.BoxGeometry(cppSize, cppSize, cppSize), new THREE.MeshBasicMaterial( {map: cppTexture} ))
const html = new THREE.Mesh(new THREE.BoxGeometry(htmlSize, htmlSize, htmlSize),new THREE.MeshBasicMaterial( {map: htmlTexture} ))
const java = new THREE.Mesh(new THREE.BoxGeometry(javaSize, javaSize, javaSize),new THREE.MeshBasicMaterial( {map: javaTexture} ))
const javascript = new THREE.Mesh(new THREE.BoxGeometry(javascriptSize, javascriptSize, javascriptSize),new THREE.MeshBasicMaterial( {map: javascriptTexture} ))
const php = new THREE.Mesh(new THREE.BoxGeometry(phpSize, phpSize, phpSize),new THREE.MeshBasicMaterial( {map: phpTexture} ))
const python = new THREE.Mesh(new THREE.BoxGeometry(pythonSize, pythonSize, pythonSize),new THREE.MeshBasicMaterial( {map: pythonTexture} ))
const swift = new THREE.Mesh(new THREE.BoxGeometry(swiftSize, swiftSize, swiftSize),new THREE.MeshBasicMaterial( {map: swiftTexture} ))
scene.add(c)
scene.add(cpp)
scene.add(html)
scene.add(java)
scene.add(javascript)
scene.add(php)
scene.add(python)
scene.add(swift)

c.position.z = 27
c.position.x = 2.5;
c.position.y = -0.75;

cpp.position.z = 27
cpp.position.x = 1.5;
cpp.position.y = -1;

html.position.z = 27.8
html.position.x = 1.25;
html.position.y = 0.2;

java.position.z = 25.25
java.position.x = 2.5;
java.position.y = 0.5;

javascript.position.z = 27
javascript.position.x = 1.5;
javascript.position.y = 1;

php.position.z = 27.5
php.position.x = 0.7;
php.position.y = 1.1;

python.position.z = 27
python.position.x = -0.12;
python.position.y = -0.42;

swift.position.z = 26.5
swift.position.x = 1.25;
swift.position.y = 0;



function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  Jacob.rotation.y += 0.0035;
  //Jacob.rotation.z += 0.0035;
  TicTacToe.rotation.x += 0.0025;
  TicTacToe.rotation.y += 0.0035;
  Tetris.rotation.y += 0.015;
  Tetris.rotation.z -= 0.01;
  BruceSchneier.rotation.y -= 0.01
  //BruceSchneier.rotation.z -= 0.008
  SecureDrop.rotation.y += 0.005

  camera.position.z = t * -0.005;
  camera.position.x = t * -0.0004;
  camera.rotation.y = t * -0.002;
}
document.body.onscroll = moveCamera;
moveCamera();

function animate(){
  requestAnimationFrame( animate );
  Jacob.rotation.y += 0.00005;
  TicTacToe.rotation.x += 0.00005;
  TicTacToe.rotation.y += 0.00007;
  Tetris.rotation.y += 0.0003;
  Tetris.rotation.z -= 0.0002;
  BruceSchneier.rotation.y -= 0.00005
  SecureDrop.rotation.y += 0.0005
  //BruceSchneier.rotation.z -= 0.00004
  c.rotation.x += 0.00025
  c.rotation.y -= 0.0004
  c.rotation.z -= 0.0003
  cpp.rotation.x -= 0.00012
  cpp.rotation.y += 0.00012
  cpp.rotation.z -= 0.00012
  html.rotation.x += 0.00018
  html.rotation.y += 0.00018
  html.rotation.z += 0.00018
  java.rotation.x -= 0.0001
  java.rotation.y += 0.00013
  java.rotation.z -= 0.00009
  javascript.rotation.x -= 0.00011
  javascript.rotation.y += 0.00011
  javascript.rotation.z += 0.00011
  php.rotation.y -= 0.0002
  php.rotation.x -= 0.0002
  php.rotation.z -= 0.0002
  python.rotation.x += 0.00017
  python.rotation.y += 0.00017
  python.rotation.z += 0.00017
  swift.rotation.x += 0.00013
  swift.rotation.y -= 0.00013
  swift.rotation.z -= 0.00013

  controls.update();

  renderer.render(scene, camera );
}
animate()
