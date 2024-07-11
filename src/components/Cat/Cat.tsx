import CatModel from "../CatModel";

type NNN = [number, number, number];

type Props = {
  position: NNN;
};

const Cat = ({ position }: Props) => {
  return (
    <mesh position={position} rotation-y={1.6} scale={[0.75, 0.75, 0.75]}>
      <CatModel />
    </mesh>
  );
};

export default Cat;
