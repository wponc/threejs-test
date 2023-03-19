import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0,2);
renderer.render(scene, camera);



const geometry = new THREE.TorusGeometry(1, .3, 16, 30);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);
torus.position.set(0,0,-1);
scene.add(torus);



const pointLight = new THREE.PointLight(0xffffff, 1.5)
scene.add(pointLight);
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)


const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);



pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

});



function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}

animate()