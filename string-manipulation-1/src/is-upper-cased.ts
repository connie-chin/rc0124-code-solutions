/* exported isUpperCased */

// check if the word is uppercased by seeing if it equals itself uppercased
// return true
// if its not uppercased
// return false
function isUpperCased(word: string): boolean {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
