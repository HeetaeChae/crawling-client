export const createEmptyArray = (length: number) => {
  const emptyArray = [...new Array(length)].map((_) => null);
  return emptyArray;
};
