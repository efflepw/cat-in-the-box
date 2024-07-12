import { useGLTF } from "@react-three/drei";

const CatModel = () => {
  const { scene } = useGLTF("/cat.glb");

  return <primitive object={scene} />;
};

export default CatModel;

useGLTF.preload("/cat.glb");
