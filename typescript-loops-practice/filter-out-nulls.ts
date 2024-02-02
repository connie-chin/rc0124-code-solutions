/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
