import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Caneca(props) {
    const ref = useRef();

    const { nodes, materials } = useGLTF('/assets/model/caneca-qmd.glb');

    // const [hovered, hover] = useState(false);
    // const [clicked, click] = useState(false);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        ref.current.rotation.x = Math.cos(time / 2) / 6;
        ref.current.rotation.y = Math.sin(time / 2) / 6;
        ref.current.position.y = Math.sin(time / 1.5) / 10;
        ref.current.rotation.z = -0.1 - (Math.sin(time / 1.5)) / 20;
    });

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes['Mug'].geometry} material={materials['Material']} ref={ref} />
        </group>
    )
}

export { Caneca }