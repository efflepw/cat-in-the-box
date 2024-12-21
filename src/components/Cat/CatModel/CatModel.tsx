import { useGLTF } from "@react-three/drei";

const CatModel = () => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "/cat.glb");

  return <primitive object={scene} />;
};

export default CatModel;

useGLTF.preload(import.meta.env.BASE_URL + "/cat.glb");
