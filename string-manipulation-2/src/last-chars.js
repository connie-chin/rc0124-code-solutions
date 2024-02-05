'use strict';
/* exported lastChars */
//function that takes length and string, returns string from length, starting count from behind
//get string length
//if length is less than string length
//empty string
//for loop going through letters starting at the last index, up until length
//add the letters to empty string
//else, return original string
function lastChars(length, string) {
  let charCount = string.length;
  if (length < charCount) {
    let newString = '';
    for (let i = charCount - length; i < charCount; i++) {
      newString += string[i];
    }
    return newString;
  } else {
    return string;
  }
}
