import { BOXES_CONFIG } from "../../const/config";
import Box from "../Box";
import Cat from "../Cat";

const Game = () => {
  return (
    <>
      {BOXES_CONFIG.map(({ position, rotation }, idx) => (
        <Box key={idx} idx={idx} initPosition={position} rotation={rotation} />
      ))}
      <Cat />
    </>
  );
};

export default Game;
