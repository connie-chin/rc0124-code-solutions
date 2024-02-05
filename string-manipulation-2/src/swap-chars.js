'use strict';
/* exported swapChars */
//function that takes a first index, second index, and string as parameters.. returns the characters at first n second index swapped
//splice?? string.splice(1,1,2)
function swapChars(firstIndex, secondIndex, string) {
  let final = '';
  let charAtFirstIndex = string[firstIndex];
  let charAtSecondIndex = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      final += charAtSecondIndex;
    } else if (i === secondIndex) {
      final += charAtFirstIndex;
    } else {
      final += string[i];
    }
  }
  return final;
}
