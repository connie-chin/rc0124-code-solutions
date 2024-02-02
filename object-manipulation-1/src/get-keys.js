'use strict';
/* exported getKeys */
function getKeys(object) {
  let newArray = [];
  for (let key in object) {
    newArray.push(key);
  }
  return newArray;
}
