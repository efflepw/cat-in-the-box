import { Canvas } from "@react-three/fiber";
import Box from "../Box";
import Cat from "../Cat";
// import { OrbitControls } from "@react-three/drei";
// import CameraPosition from "../CameraPosition";

const ThreeCanvas = () => {
  return (
    <Canvas camera={{ position: [50, 15, 0], fov: 20 }} className="h-screen">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 150, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <Box initPosition={[0, 0, -12]} rotate={0.5} />
      <Box initPosition={[0, 0, -6]} rotate={2} />
      <Box initPosition={[0, 0, 0]} rotate={0.1} />
      <Box initPosition={[0, 0, 6]} rotate={1} />
      <Box initPosition={[0, 0, 12]} rotate={0} />
      <Cat position={[-0.5, -0.55, 0]} />
      {/* <OrbitControls /> */}
      {/* <CameraPosition /> */}
    </Canvas>
  );
};

export default ThreeCanvas;
