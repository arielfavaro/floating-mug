import 'App.css';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, PresentationControls } from '@react-three/drei';
import { AiFillGithub } from 'react-icons/ai';
import Loading from 'components/Loading';
import { Caneca } from 'components/Caneca';
import { useIsMobile } from 'hooks/useIsMobile';

function App() {

  const isMobile = useIsMobile();

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 0, 25], fov: 45 }} style={{ touchAction: 'none' }}>
          <ambientLight intensity={0.1} />
          <spotLight position={[10, 10, 10]} intensity={1.5} angle={0.45} penumbra={1} />
          <Environment files="/assets/hdr/potsdamer_platz_1k.hdr" />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.2, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <Caneca position={isMobile ? [0, -1.5, 0] : [0, 1.2, 0]} />
          </PresentationControls>
          <ContactShadows position={isMobile ? [0, -8.7, 0] : [0, -7.5, 0]} opacity={0.55} width={10} height={10} blur={2.5} far={20} />
        </Canvas>
      </Suspense>
      <a href="https://github.com/arielfavaro/floating-mug" target="_blank" className='githubIcon' rel="noreferrer">
        <AiFillGithub size="2rem" />
      </a>
    </div>
  );
}

export default App;
