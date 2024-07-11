import { a, useSpring } from "@react-spring/three";
// import { useFrame, Vector3 } from "@react-three/fiber";

import { useRef, useState } from "react";
import { Mesh } from "three";
import BoxModel from "../BoxModel/BoxModel";

type NNN = [number, number, number];

type Props = {
  initPosition: NNN;
  rotate: number;
};

type SpringAnimationReturnType = {
  position: NNN;
  scale: number;
};

const Box = ({ initPosition, rotate }: Props) => {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const { scale, position } = useSpring<SpringAnimationReturnType>({
    scale: hovered ? 1.2 : 1.1,
    position: active
      ? [initPosition[0], initPosition[1] + 4, initPosition[2]]
      : initPosition,
    config: { duration: 250 },
    onRest: () => {
      if (active) {
        setTimeout(() => setActive(false), 100);
      }
    },
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
      onClick={() => setActive(true)}
      rotation-y={rotate}
    >
      <BoxModel />
    </a.mesh>
  );
};

export default Box;
