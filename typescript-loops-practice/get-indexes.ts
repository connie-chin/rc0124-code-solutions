/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    newArray.push(i);
  }
  return newArray;
}
