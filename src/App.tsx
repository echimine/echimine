import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Stage,
  Environment,
  ContactShadows,
} from '@react-three/drei';

function App() {
  return (
    <main className="flex flex-col h-screen bg-black text-white">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold">Echimine.fr</h1>
      </header>

      {/* Le div qui contient le Canvas prend tout l'espace restant */}
      <div className="flex-1 relative">
        <Canvas
          className="absolute top-0 left-0 w-full h-full"
          shadows
          camera={{ position: [5, 5, 5], fov: 45 }}
        >
          <Environment preset="sunset" background />

          <Stage environment={null} intensity={1} shadows adjustCamera>
            <mesh scale={0.5}>
              <boxGeometry args={[5, 5, 1]} />
              <meshStandardMaterial color="#FF5F1F" />
            </mesh>
          </Stage>

          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.4}
            blur={2.5}
            far={5}
          />

          <OrbitControls enablePan={false} />
        </Canvas>
      </div>
    </main>
  );
}

export default App;
