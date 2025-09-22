import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';
import * as THREE from 'three'

// Loads a `.glb` model(GLTF Format)
// Adds basic lighting
// Applies environment reflections for realism
// Wraps the model in a floating animation
// optionally tweaks the material (like setting a white color on a
// specific mesh)
// Disables zoom using OrbitControls

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === "object_5") {
                    child.material = new THREE.MeshStandardMaterial({ color: "white" });
                }
            })
        }
    }, [scene]);

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Environment preset='city' />

            <OrbitControls enableZoom={false} />

            <Float speed={5.5} rotationIntensity={0.7} floatIntensity={0.9}>
                <group scale={model.scale}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon