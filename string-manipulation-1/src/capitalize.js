'use strict';
/* exported capitalize */
function capitalize(word) {
  let firstLetter = word[0].toUpperCase();
  let restOfWord = word.substring(1).toLowerCase();
  return firstLetter + restOfWord;
}
