import { Canvas } from "@react-three/fiber";
import Box from "../Box";
// import { OrbitControls } from "@react-three/drei";
// import CameraPosition from "../CameraPosition";

const ThreeCanvas = () => {
  return (
    <Canvas camera={{ position: [40, 15, 0], fov: 20 }} className="h-screen">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 100, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <Box initPosition={[0, 0, 0]} />
      <Box initPosition={[0, 0, 5]} />
      <Box initPosition={[0, 0, 10]} />
      <Box initPosition={[0, 0, -5]} />
      <Box initPosition={[0, 0, -10]} />
      {/* boxes */}
      {/* kitty */}
      {/* <OrbitControls /> */}
      {/* <CameraPosition /> */}
    </Canvas>
  );
};

export default ThreeCanvas;
