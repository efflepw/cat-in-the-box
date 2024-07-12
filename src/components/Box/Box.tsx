import { a, useSpring } from "@react-spring/three";

import { useContext, useRef, useState } from "react";
import { Mesh } from "three";
import BoxModel from "../BoxModel/BoxModel";
import { MovesContext } from "../../context/moves";

type Props = {
  idx: number;
  initPosition: [number, number, number];
  rotation: number;
};

type SpringAnimationReturnType = {
  position: [number, number, number];
  scale: number;
  rotationZ: number;
};

const Box = ({ initPosition, rotation: rotationY, idx }: Props) => {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { addMove, pos } = useContext(MovesContext);

  const onBoxClick = () => {
    if (pos == null) {
      setActive(true);
      addMove(idx);
    }
  };

  const onRest = () => {
    if (active && pos == null) {
      setTimeout(() => setActive(false), 100);
    }
  };

  const { scale, position, rotationZ } = useSpring<SpringAnimationReturnType>({
    scale: hovered ? 1.2 : 1.1,
    position: active
      ? [initPosition[0], initPosition[1] + 4, initPosition[2]]
      : initPosition,
    rotationZ: active ? 1 : 0,
    config: { duration: 250 },
    onRest,
  });

  return (
    <a.mesh
      // @ts-ignore
      ref={mesh}
      scale-x={scale}
      scale-y={scale}
      scale-z={scale}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={onBoxClick}
      rotation-y={rotationY}
      rotation-z={rotationZ}
    >
      <BoxModel />
    </a.mesh>
  );
};

export default Box;
