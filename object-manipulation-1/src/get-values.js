'use strict';
/* exported getValues */
function getValues(object) {
  let newArray = [];
  for (let value in object) {
    newArray.push(object[value]); //named value for better understanding.
  }
  return newArray;
}
