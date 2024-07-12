import { Canvas } from "@react-three/fiber";
import Game from "../Game";

const ThreeCanvas = () => {
  return (
    <Canvas camera={{ position: [45, 10, 0], fov: 30 }} className="h-screen">
      <ambientLight intensity={Math.PI / 4} />
      <spotLight
        position={[250, 30, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI / 2}
      />
      <Game />
    </Canvas>
  );
};

export default ThreeCanvas;
