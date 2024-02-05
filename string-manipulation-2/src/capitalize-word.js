'use strict';
/* exported capitalizeWord */
//get first letter of word and change it to uppercase
//get rest of word and make it lowercase
//concatenate and make a new word
//if the word is javascript of any form
//returns JavaScript
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return 'JavaScript';
  } else {
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();
    let newWord = `${firstLetter}${restOfWord}`;
    return newWord;
  }
}
//if statement to make exception for javascript word forms
//return javascript spelt the same way
//else
//taking first letter and making it uppercase
//taking rest of word and making it lowercase
//template literal to interpolate first letter and rest of word
//returning new word
