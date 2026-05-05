"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

interface Model3DProps {
  modelPath: string;
  scrollProgress: number;
}

function PlaceholderModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    // Rotate based on scroll progress
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    groupRef.current.rotation.x = scrollProgress * Math.PI * 0.5;

    // Add subtle floating animation
    groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Main 3D geometric shape - Icosahedron */}
      <mesh position={[0, 0, 0]} castShadow>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#0c5df4"
          metalness={0.8}
          roughness={0.2}
          emissive="#0c5df4"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Outer wireframe */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#0c5df4"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[
          Math.cos((i * Math.PI * 2) / 3) * 2,
          Math.sin((i * Math.PI * 2) / 3) * 2,
          0
        ]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Model3D({ modelPath, scrollProgress }: Model3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [modelError, setModelError] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    if (!groupRef.current) return;

    // Set initial position and scale for the model
    gsap.set(groupRef.current.position, { x: 2, y: 0, z: 0 });
    gsap.set(groupRef.current.scale, { x: 1.5, y: 1.5, z: 1.5 });
  }, []);

  // Try to load the model with error handling
  let scene;
  try {
    const result = useGLTF(modelPath, true);
    scene = result.scene;
    if (scene && !modelLoaded) {
      setModelLoaded(true);
      console.log("✅ 3D model loaded successfully:", modelPath);
    }
  } catch (error) {
    if (!modelError) {
      console.warn("⚠️ 3D model not found, using placeholder:", error);
      setModelError(true);
    }
  }

  useFrame(() => {
    if (!groupRef.current) return;

    // Rotate based on scroll progress
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
    groupRef.current.rotation.x = scrollProgress * Math.PI * 0.3;

    // Add subtle floating animation
    groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.15;
  });

  if (modelError || !modelLoaded) {
    return <PlaceholderModel scrollProgress={scrollProgress} />;
  }

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

// Preload the model
try {
  useGLTF.preload("/models/hero-model.glb");
} catch (e) {
  // Model not available yet
}