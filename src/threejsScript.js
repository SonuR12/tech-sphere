// Three.js Scene Setup for Web 3.0 Canvas
import * as THREE from 'three';
const web3Canvas = document.getElementById('web3Canvas');
const genAICanvas = document.getElementById('genAICanvas');
const blockchainCanvas = document.getElementById('blockchainCanvas');

function init3DScene(canvas) {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Add light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 10, 10).normalize();
  scene.add(light);

  // Create a cube (Replace this with your Alpine AI-generated 3D models)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x007BFF });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

// Initialize Three.js scenes for each canvas
// init3DScene(web3Canvas);
init3DScene(genAICanvas);
// init3DScene(blockchainCanvas);
