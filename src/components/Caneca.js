import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Caneca(props) {
    const ref = useRef();

    const { nodes, materials } = useGLTF('/assets/model/caneca-qmd.glb');

    // const [hovered, hover] = useState(false);
    // const [clicked, click] = useState(false);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = Math.cos(t / 2) / 6;
        ref.current.rotation.y = Math.sin(t / 2) / 6;
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
        ref.current.rotation.z = -0.1 - (1 + Math.sin(t / 1.5)) / 20;
    });

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes['Mug'].geometry} material={materials['Material']} ref={ref} />
        </group>
    )
}

export { Caneca }