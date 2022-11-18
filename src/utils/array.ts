export const sortByIndex = (a: any, b: any) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
}