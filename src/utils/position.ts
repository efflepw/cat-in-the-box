import { BOX_COUNT } from "../const/config";

export const getPositionOnMove = (
  move: number,
  prevPosition: Set<number>
): Set<number> => {
  const newPositions = new Set<number>();

  prevPosition.forEach((pos: number) => {
    const p1 = pos + 1;
    const p2 = pos - 1;

    if (p1 < BOX_COUNT && p1 !== move) {
      newPositions.add(p1);
    }

    if (p2 >= 0 && p2 !== move) {
      newPositions.add(p2);
    }
  });

  return newPositions;
};
