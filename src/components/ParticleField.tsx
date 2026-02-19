"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 180;

function seedRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rng = seedRandom(42);

const INITIAL_POSITIONS = (() => {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3] = (rng() - 0.5) * 12;
    arr[i * 3 + 1] = (rng() - 0.5) * 8;
    arr[i * 3 + 2] = (rng() - 0.5) * 6;
  }
  return arr;
})();

const INITIAL_VELOCITIES = (() => {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3] = (rng() - 0.5) * 0.003;
    arr[i * 3 + 1] = (rng() - 0.5) * 0.003;
    arr[i * 3 + 2] = (rng() - 0.5) * 0.002;
  }
  return arr;
})();

const INITIAL_SIZES = (() => {
  const arr = new Float32Array(PARTICLE_COUNT);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i] = rng() * 2.5 + 0.5;
  }
  return arr;
})();

const ORB_DATA = Array.from({ length: 5 }, (_, i) => ({
  pos: [
    (rng() - 0.5) * 8,
    (rng() - 0.5) * 4,
    (rng() - 0.5) * 3 - 1,
  ] as [number, number, number],
  scale: rng() * 0.12 + 0.06,
  color: i % 2 === 0 ? "#a78bfa" : "#7dd3fc",
}));

function Particles() {
  const mesh = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const geo = mesh.current.geometry;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const t = clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      arr[i3] += INITIAL_VELOCITIES[i3] + Math.sin(t * 0.3 + i) * 0.0008;
      arr[i3 + 1] += INITIAL_VELOCITIES[i3 + 1] + Math.cos(t * 0.2 + i) * 0.0008;
      arr[i3 + 2] += INITIAL_VELOCITIES[i3 + 2];

      if (arr[i3] > 6) arr[i3] = -6;
      if (arr[i3] < -6) arr[i3] = 6;
      if (arr[i3 + 1] > 4) arr[i3 + 1] = -4;
      if (arr[i3 + 1] < -4) arr[i3 + 1] = 4;
      if (arr[i3 + 2] > 3) arr[i3 + 2] = -3;
      if (arr[i3 + 2] < -3) arr[i3 + 2] = 3;
    }
    posAttr.needsUpdate = true;
    mesh.current.rotation.y = t * 0.02;
    mesh.current.rotation.x = Math.sin(t * 0.01) * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[INITIAL_POSITIONS, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[INITIAL_SIZES, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * 0.4 + i * 2.1) * 0.6;
      child.position.x += Math.sin(t * 0.15 + i) * 0.001;
    });
  });

  return (
    <group ref={group}>
      {ORB_DATA.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.scale, 16, 16]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField() {
  return (
    <div className="particle-field">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
