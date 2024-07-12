import { useContext } from "react";
import { MovesContext } from "../../context/moves";

import CatModel from "../CatModel";
import { CAT_CONFIG } from "../../const/config";

const Cat = () => {
  const { pos } = useContext(MovesContext);

  if (pos == null) return <></>;

  const position = [
    CAT_CONFIG.positionX,
    CAT_CONFIG.positionY,
    CAT_CONFIG.positionZA * pos + CAT_CONFIG.positionZB,
  ] as const;

  return (
    <mesh
      position={position}
      rotation-y={CAT_CONFIG.rotationY}
      scale={CAT_CONFIG.scale}
    >
      <CatModel />
    </mesh>
  );
};

export default Cat;
