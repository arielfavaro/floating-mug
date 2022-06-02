import './App.css';
import { Canvas, ambientLight } from '@react-three/fiber';
import { Environment, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Caneca } from './components/Caneca';
import { AiFillGithub } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 25], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <spotLight position={[10, 10, 10]} angle={0.45} penumbra={1} />
          <Environment files="/assets/hdr/potsdamer_platz_1k.hdr" />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <Caneca />
          </PresentationControls>
        </Suspense>
      </Canvas>
      <a href="https://github.com/arielfavaro/caneca-qmd" target="_blank" className='githubIcon' rel="noreferrer">
        <AiFillGithub size="2rem" />
      </a>
    </div>
  );
}

export default App;
