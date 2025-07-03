import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Image } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';

interface SocialCardProps {
  position?: [number, number, number];
  url?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth rotation on hover
    easing.dampE(
      meshRef.current.rotation,
      hovered ? [0.2, 0.4, 0.2] : [0, 0, 0],
      0.3,
      delta
    );

    // Smooth follow pointer
    const x = state.pointer.x;
    const y = state.pointer.y;
    easing.damp3(meshRef.current.position, [x * 0.5, y * 0.5, 0], 0.3, delta);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <Image url="/images/logo/instagram.png" scale={1.5} transparent />
      <meshStandardMaterial
        color={hovered ? '#FF5F1F' : '#008FD2'}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
};

const SocialNetworks: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SocialCard />
      </Canvas>
    </div>
  );
};

export default SocialNetworks;
