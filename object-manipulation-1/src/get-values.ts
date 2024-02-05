/* exported getValues */
function getValues(object: Record<string, unknown>): any[] {
  const newArray: any[] = [];
  for (const value in object) {
    newArray.push(object[value]); // named value for better understanding.
  }
  return newArray;
}
