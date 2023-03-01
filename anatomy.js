// Get the canvas element
const canvas = document.getElementById("anatomy-canvas");

// Create a new Three.js scene
const scene = new THREE.Scene();

// Create a new Three.js camera
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);

// Create a new Three.js renderer
const renderer = new THREE.WebGLRenderer({ canvas });

// Add some lighting to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 50);
scene.add(light);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load("/path/to/model.gltf", (gltf) => {
  // Add the model to the scene
  scene.add(gltf.scene);
});

// Update the camera and renderer on window resize
function onWindowResize() {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

window.addEventListener("resize", onWindowResize);

// Render the scene on every frame
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
