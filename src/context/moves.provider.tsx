import { useState } from "react";

import { BOX_COUNT } from "../const/config";
import { getPositionOnMove } from "../utils/position";

import MovesContext from "./moves";

type Props = {
  children: React.ReactNode;
};

const MovesContextProvider = ({ children }: Props) => {
  const [moves, setMoves] = useState<number[]>([]);
  const [position, setPosition] = useState<Set<number>>(
    new Set([...Array(BOX_COUNT).keys()])
  );
  const [catBox, setCatBox] = useState<number | null>(null);

  const addMove = (move: number) => {
    setMoves((moves) => [...moves, move]);

    const positions = getPositionOnMove(move, position);

    setPosition(positions);

    if (positions.size == 0) {
      setCatBox(move);
    }
  };

  const state = {
    moves,
    addMove,
    catBox,
  };

  return (
    <MovesContext.Provider value={state}>{children}</MovesContext.Provider>
  );
};

export default MovesContextProvider;
