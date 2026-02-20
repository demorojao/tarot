import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { TarotCardData } from '../types';

interface ThreeCardProps {
    card: TarotCardData;
    position: [number, number, number];
    rotation: [number, number, number];
    onClick: (card: TarotCardData) => void;
}

export const ThreeCard: React.FC<ThreeCardProps> = ({ card, position, rotation, onClick }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setTexture(null); // Reset texture when imageUrl changes
        setImageError(false); // Reset error state

        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous'); // Try to request CORS access

        loader.load(
            card.imageUrl,
            (loadedTexture) => {
                loadedTexture.minFilter = THREE.LinearFilter;
                loadedTexture.magFilter = THREE.LinearFilter;
                loadedTexture.colorSpace = THREE.SRGBColorSpace;
                setTexture(loadedTexture);
                setImageError(false);
            },
            undefined, // onProgress
            (err) => {
                console.warn(`Failed to load texture for ${card.name}:`, err);
                setImageError(true);
                setTexture(null); // Ensure texture is null on error
            }
        );
        // No cleanup needed for texture disposal in this specific use case,
        // as React Three Fiber handles material updates.
    }, [card.imageUrl, card.name]);

    // Animation loop
    useFrame((state, delta) => {
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;

            // Smooth hover effect
            const targetScale = hovered ? 1.2 : 1;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10);

            // Slight rotation on hover
            if (hovered) {
                meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotation[1] + 0.2, delta * 5);
            } else {
                meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotation[1], delta * 5);
            }
        }
    });

    return (
        <group>
            <mesh
                ref={meshRef}
                position={position}
                rotation={rotation}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick(card);
                }}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = 'pointer';
                    setHover(true);
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = 'auto';
                    setHover(false);
                }}
            >
                {/* Card Front (Texture or Fallback) */}
                <boxGeometry args={[2, 3.5, 0.02]} />

                {texture && !imageError ? (
                    <meshStandardMaterial
                        map={texture}
                        roughness={0.4}
                        metalness={0.1}
                        side={THREE.FrontSide}
                    />
                ) : (
                    // Fallback material for error/loading
                    <meshStandardMaterial
                        color={imageError ? "#ef4444" : "#cbd5e1"} // Red if error, gray if loading
                        roughness={0.8}
                    />
                )}

                {/* Card Back (Gold/Dark Pattern) */}
                <meshStandardMaterial
                    attach="material-1" // Sides
                    color="#1e1b4b"
                />
                <meshStandardMaterial
                    attach="material-2" // Top
                    color="#1e1b4b"
                />
                <meshStandardMaterial
                    attach="material-3" // Bottom
                    color="#1e1b4b"
                />
                <meshStandardMaterial
                    attach="material-4" // Back
                    color="#0f172a"
                    roughness={0.8}
                    metalness={0.5}
                />
                <meshStandardMaterial
                    attach="material-5" // Front again (covered by material above usually, but good for safety)
                    color="#0f172a"
                />
            </mesh>

            {/* Text Label on Card if Image Fails or Loading */}
            {(!texture || imageError) && (
                <Text
                    position={[position[0], position[1], position[2] + 0.03]}
                    fontSize={0.3}
                    color="black"
                    maxWidth={1.8}
                    textAlign="center"
                    anchorX="center"
                    anchorY="middle"
                >
                    {imageError ? "Imagem Indisponível" : "Carregando..."}
                </Text>
            )}

            {/* Floating Label on Hover */}
            {hovered && (
                <Text
                    position={[position[0], position[1] - 2, position[2] + 0.5]}
                    fontSize={0.2}
                    color="#fbbf24"
                    anchorX="center"
                    anchorY="middle"
                // font="https://fonts.gstatic.com/s/cinzel/v11/8vIJ7ww63mVu7gt78Uk.woff" // Removed to avoid another potential CORS/load error
                >
                    {card.namePt}
                </Text>
            )}
        </group>
    );
};
