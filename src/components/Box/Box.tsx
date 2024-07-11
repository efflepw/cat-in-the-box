import { Vector3 } from "@react-three/fiber";

const BOX_SHAPE: [number, number, number] = [2, 1.6, 2];

type Props = {
  position: Vector3;
};

const Box = ({ position }: Props) => {
  return (
    <mesh position={position}>
      <boxGeometry args={BOX_SHAPE} />
      <meshPhongMaterial color={"yellow"} />
    </mesh>
  );
};

export default Box;
