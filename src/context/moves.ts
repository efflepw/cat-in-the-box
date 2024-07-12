import { createContext } from "react";

type MovesContextType = {
  moves: number[];
  addMove: (move: number) => void;
  catBox: number | null;
};

const MovesContext = createContext<MovesContextType>({
  moves: [],
  addMove: () => {},
  catBox: null,
});

export default MovesContext;
