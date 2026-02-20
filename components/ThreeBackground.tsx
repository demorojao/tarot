import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Sparkles, Cloud, Float } from '@react-three/drei';
import * as THREE from 'three';

const FogController = () => {
    const { scene } = useThree();
    useMemo(() => {
        scene.fog = new THREE.FogExp2(0x1a1033, 0.02);
    }, [scene]);
    return null;
};

const MovingStars = () => {
    const starsRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (starsRef.current) {
            starsRef.current.rotation.y += delta * 0.05;
            starsRef.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const ParallaxEffect = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
        camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
    });

    return null;
};

export const ThreeBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <color attach="background" args={['#0f0c29']} />

                <FogController />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#fbbf24" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

                <MovingStars />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Cloud opacity={0.5} speed={0.4} bounds={[10, 2, 2]} position={[0, -2, -5]} color="#4c1d95" />
                    <Cloud opacity={0.5} speed={0.4} bounds={[10, 2, 2]} position={[0, 2, -10]} color="#1e1b4b" />
                </Float>

                <Sparkles
                    count={100}
                    scale={12}
                    size={4}
                    speed={0.4}
                    opacity={0.7}
                    color="#fbbf24"
                />

                <ParallaxEffect />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/80 pointer-events-none" />
        </div>
    );
};
