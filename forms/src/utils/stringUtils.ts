export const fieldName = (id: string): string => {
  const idString = id.toString();
  return idString[0].toUpperCase() + idString.slice(1);
};
