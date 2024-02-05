'use strict';
/* exported drop */
//function that takes an array and drops the count number from the beginning
//if count is less than array length
//create new array
//for loop to go through array elements, starting at count index, until end of array
//pushing elements into new array
//returning new array
//else
//return array
function drop(array, count) {
  if (count < array.length) {
    let newArray = [];
    for (let i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return [];
  }
}
