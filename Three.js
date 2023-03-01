const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const canvasContainer = document.getElementById('canvas-container');
canvasContainer.appendChild(renderer.domElement);
const loader = new THREE.GLTFLoader();

loader.load('model/scene.gltf', function (gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});
