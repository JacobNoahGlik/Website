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

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  Jacob.rotation.y += 0.0035;
  Jacob.rotation.z += 0.0035;
  TicTacToe.rotation.z += 0.0025;
  TicTacToe.rotation.y += 0.0035;
  Tetris.rotation.y += 0.015;
  Tetris.rotation.z += 0.01;

  camera.position.z = t * -0.005;
  camera.position.x = t * -0.0004;
  camera.rotation.y = t * -0.002;
}
document.body.onscroll = moveCamera;
moveCamera();

function animate(){
  requestAnimationFrame( animate );
  TicTacToe.rotation.z += 0.00005;
  TicTacToe.rotation.y += 0.00007;
  Tetris.rotation.y += 0.0003;
  Tetris.rotation.z += 0.0002;

  controls.update();

  renderer.render(scene, camera );
}
animate()