'use client';

import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ThreeDModel = ({ modelUrl }) => {
  const gltfRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      gltfRef.current = gltf.scene;
    });
  }, [modelUrl]);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={gltfRef}>
        <primitive object={gltfRef.current} />
      </mesh>
    </Canvas>
  );
};

export default ThreeDModel;