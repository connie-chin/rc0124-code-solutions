/* exported toObject */

// assign the first value of the array into a new variable
// assign the second value of the array into a new variable
// setting the first value as the 'key of the new object', setting the second value as the new 'value of that key
// returning the object

function toObject(keyValuePair: any[]): object {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const object = { [key]: value };
  return object;
}
