import { BOARD_SECTIONS } from "./const/boardTable";
import { getStatusElementDragg } from "./statusIdentify";

export const initilizeBoardDrop = (elementDraggs) => {
  const boardSections = {};

  Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
    boardSections[boardSectionKey] = getStatusElementDragg(
      elementDraggs,
      boardSectionKey
    );
  });

  return boardSections;
};

export const findSectionContainer = (boardSections, id) => {
  if (id in boardSections) return id;

  const container = Object.keys(boardSections).find((key) => {
    return boardSections[key].find((item) => item.id === id);
  });

  return container;
};
