import { useContext, useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

import MovesContext from "../../context/moves";
import { CAT_CONFIG } from "../../const/config";

import CatModel from "./CatModel";

const CatMesh = ({ catBox }: { catBox: number }) => {
  const meshRef = useRef<Mesh>(null);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0);

  const position = [
    CAT_CONFIG.positionX,
    CAT_CONFIG.positionY,
    CAT_CONFIG.positionZA * catBox + CAT_CONFIG.positionZB,
  ] as const;

  useFrame(() => {
    if (meshRef.current && rotationSpeed > 0) {
      meshRef.current.rotation.y -= rotationSpeed;
    }
  });

  const increaseSpeed = () => {
    setRotationSpeed((speed) => speed + 0.005);
  };

  return (
    <mesh
      // @ts-ignore
      ref={meshRef}
      position={position}
      rotation-y={CAT_CONFIG.rotationY}
      scale={CAT_CONFIG.scale}
      onClick={increaseSpeed}
    >
      <CatModel />
    </mesh>
  );
};

const Cat = () => {
  const { catBox } = useContext(MovesContext);

  if (catBox == null) return <></>;

  return <CatMesh catBox={catBox} />;
};

export default Cat;
