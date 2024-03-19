'use strict';
/* exported includes */
// function that takes an array, and a value to search for in the array, returning a boolean if its found or not
// for loop going through all elements of array
// if value matches an element in the array
// return true
// else
// return false
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
// function that takes an array, and a value to search for in the array, returning a boolean if its found or not
// for loop going through all elements of array
// if value matches an element in the array
// return true SCOPE MATTER
// return false
