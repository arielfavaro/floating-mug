import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useGLTF, useTexture } from '@react-three/drei';
import styles from 'styles/Caneca.module.css';
import { texturesOptions } from 'lib/texturesOptions';
import { useIsMobile } from 'hooks/useIsMobile';

function Caneca(props) {
    const ref = useRef();

    const isMobile = useIsMobile();

    const { nodes, materials } = useGLTF('/assets/model/caneca.glb');

    const [textureActive, setTextureActive] = useState(0);

    const roughnessTexture = useTexture(`/assets/textures/roughness.png`, texture => {
        texture.flipY = false;
    });

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
                material-roughness={1}
                material-roughnessMap={roughnessTexture}
                ref={ref}
            >
                <Html position={isMobile ? [0, 8.5, 0] : [-8, 0, 0]} transform occlude>
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