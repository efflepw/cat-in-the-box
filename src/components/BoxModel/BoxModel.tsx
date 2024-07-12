import { useGLTF } from "@react-three/drei";
import { BOX_CONFIG } from "../../const/config";

const BoxModel = () => {
  const { nodes, materials } = useGLTF("/box.glb");

  return (
    <group dispose={null}>
      <mesh
        // @ts-ignore
        geometry={nodes.Box.geometry}
        material={materials.Material}
        position={BOX_CONFIG.position}
        scale={BOX_CONFIG.scale}
      />
    </group>
  );
};

export default BoxModel;

useGLTF.preload("/box.glb");
