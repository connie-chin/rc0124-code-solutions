'use strict';
/* exported truncate */
//create an empty new string
//use a for loop to go through the letters in the string at each index
//count length letters from the beginning, get rid of rest of string
//pushing the first length number letters into the new string
//adding ellipsis to the end of the new string
//or can turn the string into an array? and use array methods, then turn it back into string?
function truncate(length, string) {
  let howManyChars = string.length;
  if (length < howManyChars) {
    let newString = '';
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
    return `${newString}...`;
  } else {
    return `${string}...`;
  }
}
