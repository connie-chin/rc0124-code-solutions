'use strict';
/* exported takeRight */
// function that takes array and count, and returns new array from count til end
// if count is less than array length
// new array
// for loop going through elements at index from count til end of array
// push elements into new array
// else
// return array
function takeRight(array, count) {
  if (count < array.length) {
    const newArray = [];
    for (let i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
}
