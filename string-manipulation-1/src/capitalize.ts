/* exported capitalize */

// make the first letter of a string UpperCased
// make the rest of the string LowerCased
// concatenate both strings to make a new word where only the first letter is capitalized
function capitalize(word: string): string {
  const firstLetter: string = word[0].toUpperCase();
  const restOfWord: string = word.substring(1).toLowerCase();
  return firstLetter + restOfWord;
}
