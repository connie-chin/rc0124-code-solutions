/* exported tail */

// create a new empty array
// create a for loop to loop through the elements of the array, starting at the second value/first index
// pushing the values at those indexes into the empty array
// returning the array with the values that were pushed
function tail(array: any[]): any[] {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
