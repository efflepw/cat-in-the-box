import { useContext } from "react";
import MovesContext from "../../context/moves";
import { CONGRATULATIONS, MOVES, MOVES_COLORS } from "../../const/text";
import { BOXES_CONFIG } from "../../const/config";

const MovesList = () => {
  const { moves, catBox } = useContext(MovesContext);

  const getColor = (move: number, idx: number) => {
    if (MOVES_COLORS.length == BOXES_CONFIG.length) {
      return MOVES_COLORS[move];
    } else {
      return MOVES_COLORS[idx % MOVES_COLORS.length];
    }
  };

  return (
    <div className="absolute bottom-16 left-0 right-0">
      {catBox != null && (
        <div className="flex justify-center py-16">
          <span className="text-5xl text-slate-500 select-none">
            {CONGRATULATIONS} {moves.length} {MOVES}
          </span>
        </div>
      )}
      <div className="flex justify-center flex-wrap gap-2 opacity-90">
        {moves.map((move, idx) => (
          <div
            key={idx}
            className={`size-8 flex justify-center items-center ${getColor(
              move,
              idx
            )}`}
          >
            <span>{move + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovesList;
