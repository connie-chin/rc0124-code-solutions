'use strict';
/* exported dropRight */
// function that takes an array and takes count number elements from the end of array
// if count is less than array length
// new empty array
// for loop going through array from index 0 to array length - count
// push elements into new array
// return new array
// else
// return []
function dropRight(array, count) {
  if (count < array.length) {
    const newArray = [];
    for (let i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return [];
  }
}
