'use strict';
/* exported chunk */
// function taking an array and size number, returning new sub of arrays in size
// create new array 1
// create new array 2
// if array element is less than size
// for loop though array until size
// push array element into new array 1
// else if array element larger than size
// for loop going through array from array length- size
// push elements into array 2
// return new array 1, new array 2
function chunk(array, size) {
  let newArray1 = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      newArray1.push([array[i]]);
    } else {
      let newArray2 = newArray1[newArray1.length - 1];
      newArray2.push(array[i]);
    }
  }
  return newArray1;
}
