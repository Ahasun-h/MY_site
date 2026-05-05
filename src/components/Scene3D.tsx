"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense } from "react";
import Model3D from "./Model3D";

interface Scene3DProps {
  scrollProgress: number;
  modelPath?: string;
}

export default function Scene3D({ scrollProgress, modelPath = "/models/hero-model.glb" }: Scene3DProps) {
  return (
    <div className="hero-3d-container">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />

        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#0c5df4" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
        />
        <hemisphereLight args={["#ffffff", "#0c5df4", 0.3]} />

        {/* Environment for realistic reflections */}
        <Environment preset="city" />

        {/* 3D Model with smooth float animation */}
        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.1, 0.1]}
        >
          <Suspense fallback={null}>
            <Model3D modelPath={modelPath} scrollProgress={scrollProgress} />
          </Suspense>
        </Float>

        {/* Ground shadows for depth */}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={15}
          blur={2.5}
          far={5}
        />

        {/* Subtle controls for interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}