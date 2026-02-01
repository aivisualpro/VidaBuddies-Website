"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function PureeBubble() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      // Pulse scale slightly
      const scale = 2.4 + Math.sin(state.clock.getElapsedTime()) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere args={[1, 100, 100]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#f97316" // Orange-500
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.3}
        bumpScale={0.05}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}
