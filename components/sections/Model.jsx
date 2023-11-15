'use client'

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { PLYLoader } from 'three/examples/jsm/loaders/PlyLoader';
import { ObjectLoader } from 'three/src/loaders/ObjectLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Model = () => {
  const fileInputRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 1000));
  const groupRef = useRef(new THREE.Group());
  const canvasRef = useRef(null);

  useEffect(() => {
    cameraRef.current.position.z = 5;


    const directionalLight = new THREE.DirectionalLight(0x666666, 0.6);
    directionalLight.position.set(1, 1, 1);
    sceneRef.current.add(directionalLight);
    sceneRef.current.add(groupRef.current);

    const renderer = new THREE.WebGLRenderer();

    const controls = new OrbitControls(cameraRef.current, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    updateRendererSize(renderer);
    window.addEventListener('resize', () => updateRendererSize(renderer));
    canvasRef.current.appendChild(renderer.domElement);

    const animate = () => {
        requestAnimationFrame(animate);
      
        // Add this line to update controls in the animation loop
        controls.update();
      
        renderer.render(sceneRef.current, cameraRef.current);
    };

    animate();

    return () => {
      // Clean up resources
      window.removeEventListener('resize', () => updateRendererSize(renderer));
    };
  }, []); // Empty dependency array to run this effect only once on mount

  const updateRendererSize = (renderer) => {
    const newWidth = 400;
    const newHeight = 400;

    cameraRef.current.aspect = 1;
    cameraRef.current.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    const reader = new FileReader();
  
    reader.onload = function () {
      let loader = null;
  

      switch (file.name.split('.').pop().toLowerCase()) {
        case 'glb':
        case 'gltf':
          loader = new GLTFLoader();
          break;
        case 'obj':
          loader = new OBJLoader();
          break;
        case 'fbx':
          loader = new FBXLoader();
          break;
        case 'stl':
          loader = new STLLoader();
          break;
        case 'dae':
          loader = new ColladaLoader();
          break;
        case 'ply':
          loader = new PLYLoader();
          break;
        case 'json':
          loader = new ObjectLoader();
          break;
        default:
          console.log('File type not supported');
          return;
      }

      loader.load(
        // Path to the GLTF file
        URL.createObjectURL(file),
        (gltf) => {
          const mesh = new THREE.Mesh(gltf.scene.children[0].geometry, new THREE.MeshStandardMaterial()); // Use basic material
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          groupRef.current.add(mesh);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          console.error('Error loading GLTF:', error);
        }
      );
    };
  
    reader.readAsText(file);
  };

  return (
    <div>
      <label htmlFor="model" className="text-white">
        Choose a 3D model:
      </label>
      <input type="file" name="model" id="pickFile" onChange={handleFileChange} ref={fileInputRef} />
      <div ref={canvasRef} className="z-1"></div>
    </div>
  );
};

export default Model;
