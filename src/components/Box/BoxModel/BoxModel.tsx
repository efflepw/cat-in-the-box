import { useGLTF } from "@react-three/drei";

const BoxModel = () => {
  const { nodes, materials } = useGLTF("/box.glb");

  return (
    <group dispose={null}>
      <mesh
        // @ts-ignore
        geometry={nodes.Box.geometry}
        material={materials.Material}
        position={[-0.16, 1.015, -0.071]}
        scale={[1, 0.74, 1.4]}
      />
    </group>
  );
};

export default BoxModel;

useGLTF.preload("/box.glb");
