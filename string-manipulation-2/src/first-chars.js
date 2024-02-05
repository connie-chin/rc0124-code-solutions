'use strict';
/* exported firstChars */
//function that takes a length and string as parameters, returns the first index of length characters of string
//want it to count the number of chars in a string,
//if length > charCount
//return the original char
//else
//return the first length number of characters,
function firstChars(length, string) {
  let charCount = string.length;
  if (length < charCount) {
    let newString = '';
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
    return newString;
  } else {
    return string;
  }
}
