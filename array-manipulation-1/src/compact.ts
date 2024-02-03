/* exported compact */

// create a new empty array
// create a for loop going through the elements of the array
// if the array is truthy
// push into the empty array
// return array with the new values
function compact(array: any[]): any[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
