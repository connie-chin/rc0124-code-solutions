/* exported getKeys */

// create a new string array
// use a for in loop to access the keys in object
// push the key names into the string array
// return the string array

function getKeys(object: Record<string, unknown>): string[] {
  const newArray: string[] = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
