import { createContext, useState } from "react";
import { BOX_COUNT } from "../const/config";
import { getPositionOnMove } from "../utils/position";

type MovesContextType = {
  moves: number[];
  addMove: (move: number) => void;
  pos: number | null;
};

export const MovesContext = createContext<MovesContextType>({
  moves: [],
  addMove: () => {},
  pos: null,
});

type Props = {
  children: React.ReactNode;
};

export const MovesContextProvider = ({ children }: Props) => {
  const [moves, setMoves] = useState<number[]>([]);
  const [position, setPosition] = useState<Set<number>>(
    new Set([...Array(BOX_COUNT).keys()])
  );
  const [pos, setPos] = useState<number | null>(null);

  const addMove = (move: number) => {
    setMoves((moves) => [...moves, move]);

    const positions = getPositionOnMove(move, position);
    setPosition(positions);

    if (positions.size == 0) {
      setPos(move);
    }
  };

  const state = {
    moves,
    addMove,
    pos,
  };

  return (
    <MovesContext.Provider value={state}>{children}</MovesContext.Provider>
  );
};
