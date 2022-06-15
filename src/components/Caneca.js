import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useGLTF, useTexture } from '@react-three/drei';
import styles from '../styles/Caneca.module.css';

function Caneca(props) {
    const ref = useRef();

    const { nodes, materials } = useGLTF('/assets/model/caneca.glb');

    const [textureActive, setTextureActive] = useState(0);

    const texturesOptions = [
        {
            name: 'Coffee and Contemplation',
            icon: 'coffee-002.jpg',
            file: 'coffee-002.jpg',
        },
        {
            name: 'Retrowave',
            icon: 'retrowave-001.jpg',
            file: 'retrowave-001.jpg',
        },
        {
            name: 'Quattromani',
            icon: 'qmd.jpg',
            file: 'qmd.jpg',
        },
    ];

    const texture = useTexture(`/assets/textures/${texturesOptions[textureActive].file}`, texture => {
        texture.flipY = false;
    });

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        ref.current.rotation.x = Math.cos(time / 2) / 6;
        ref.current.rotation.y = Math.sin(time / 2) / 6;
        ref.current.position.y = Math.sin(time / 1.5) / 10;
        ref.current.rotation.z = -0.1 - (Math.sin(time / 1.5)) / 20;
    });

    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes['Mug'].geometry}
                material={materials['Material']}
                material-map={texture}
                // material-roughness={0}
                ref={ref}
            >
                <Html position={[-8, 0, 0]} transform occlude>
                    <ul className={styles.mugSelector}>
                        {texturesOptions.map((texture, index) => (
                            <li
                                className={`${styles.mugOption} ${index === textureActive && styles.mugOptionActive}`}
                                key={index}
                                onClick={() => setTextureActive(index)}
                            >
                                <img src={`/assets/icons/${texture.icon}`} alt={texture.name} title={texture.name} />
                            </li>
                        ))}
                    </ul>
                </Html>
            </mesh>
        </group >
    )
}

export { Caneca }