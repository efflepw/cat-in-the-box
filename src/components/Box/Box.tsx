import { a, useSpring } from "@react-spring/three";
// import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

type NNN = [number, number, number];

const BOX_SHAPE: NNN = [2, 1.6, 2];

type Props = {
  initPosition: NNN;
};

type SpringAnimationReturnType = {
  position: NNN;
  scale: number;
};

const Box = ({ initPosition }: Props) => {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const { scale, position } = useSpring<SpringAnimationReturnType>({
    scale: hovered ? 1.1 : 1,
    position: active
      ? [initPosition[0], initPosition[1] + 3, initPosition[2]]
      : initPosition,
    config: { duration: 200 },
    onRest: () => {
      if (active) {
        setTimeout(() => setActive(false), 200);
      }
    },
  });

  // useFrame((_, delta) => {
  //   if (mesh.current) {
  //     // mesh.current.position.x += delta;
  //     // mesh.current.position.y += delta;
  //   }
  // });

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
    >
      <boxGeometry args={BOX_SHAPE} />
      <meshPhongMaterial color={"yellow"} />
    </a.mesh>
  );
};

export default Box;
