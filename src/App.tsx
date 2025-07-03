import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Stage,
  Environment,
  ContactShadows,
} from '@react-three/drei';

function App() {
  return (
    <main className="flex flex-col h-screen">
      {/* Le div qui contient le Canvas prend tout l'espace restant */}
      <div className="flex-1 relative">
        {/* <Canvas
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
        </Canvas> */}

        <video
          // ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-screen w-full object-cover"
        >
          {/* <source src="videos/final.webm" type="video/webm" /> */}
          <source
            src="public/video/Edit_Aestetique_Thrawn_Empire_Fini_Q_E.mp4"
            type="video/mp4"
          />
          Votre navigateur ne prend pas en charge les vidéos WEBM ni MP4.
        </video>
      </div>
    </main>
  );
}

export default App;
