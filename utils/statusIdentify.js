export const getStatusElementDragg = (elementDraggs, status) =>
  elementDraggs.filter((elementDrag) => elementDrag.status === status);

export const getElementDraggId = (elementDraggs, id) =>
  elementDraggs.find((elementDragg) => elementDragg.id === id);
