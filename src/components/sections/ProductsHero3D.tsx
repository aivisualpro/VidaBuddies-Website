"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Text, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingFruits() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const fruits = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      speed: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.5 + 0.2,
      color: ["#fb923c", "#ef4444", "#facc15", "#84cc16", "#a855f7"][Math.floor(Math.random() * 5)]
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
        group.current.rotation.x = Math.cos(t / 4) / 8;
        group.current.rotation.y = Math.sin(t / 4) / 8;
        group.current.position.y = Math.sin(t / 2) / 10;
    }
  });

  return (
    <group ref={group}>
      {fruits.map((fruit, i) => (
        <Float
          key={i}
          speed={fruit.speed * 2}
          rotationIntensity={2}
          floatIntensity={2}
          position={fruit.position}
        >
          <Sphere args={[1, 32, 32]} scale={fruit.scale}>
            <MeshDistortMaterial
              color={fruit.color}
              speed={2}
              distort={0.4}
              radius={1}
              metalness={0.5}
              roughness={0.2}
              emissive={fruit.color}
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export default function ProductsHero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fb923c" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
        
        <FloatingFruits />
        
        <ContactShadows
          position={[0, -5, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={4.5}
        />
        
        <Environment preset="city" />
        <Rig />
      </Canvas>
    </div>
  );
}
