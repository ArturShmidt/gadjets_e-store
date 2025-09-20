'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Group } from 'three';
interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(url) as { scene: Group };

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
    />
  );
};

const ModelCanvas: React.FC<ModelProps> = ({ url }) => (
  <div className="w-[300px] md:w-[320px] h-[280px] md:h-[320px]">
    <Canvas className="rounded-xl">
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />
      <Suspense fallback={null}>
        <Stage
          environment="city"
          intensity={0.6}
        >
          <Model url={url} />
        </Stage>
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  </div>
);

export default ModelCanvas;

useGLTF.preload('/path/to/your/model.glb');
