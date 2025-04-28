import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../contexts/ThemeContext';

// Generate random points in a sphere
const generatePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.cbrt(Math.random()) * radius;

    points[i3] = r * Math.sin(phi) * Math.cos(theta);
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i3 + 2] = r * Math.cos(phi);
  }
  return points;
};

const ParticleField: React.FC<{ count: number; size: number; color: string }> = ({ count, size, color }) => {
  const points = useRef<THREE.Points>(null!);
  const sphere = useRef<Float32Array>(generatePoints(count, 5));

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <Points ref={points} positions={sphere.current} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent 
        color={color} 
        size={size} 
        sizeAttenuation={true} 
        depthWrite={false} 
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ParticleBackground: React.FC = () => {
  const { isDarkMode } = useTheme();
  const particleColor = isDarkMode ? '#64FFDA' : '#0077ff';
  
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField count={2000} size={0.015} color={particleColor} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;