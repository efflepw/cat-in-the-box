import { useContext } from "react";

import MovesContext from "../../context/moves";
import { CAT_CONFIG } from "../../const/config";

import CatModel from "../CatModel";

const Cat = () => {
  const { catBox } = useContext(MovesContext);

  if (catBox == null) return <></>;

  const position = [
    CAT_CONFIG.positionX,
    CAT_CONFIG.positionY,
    CAT_CONFIG.positionZA * catBox + CAT_CONFIG.positionZB,
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
