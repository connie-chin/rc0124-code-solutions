/* exported reverseWord */

// create an empty string
// create a for loop going through the word, starting at the end
// add the letters at the index into the new string
// return the new word

function reverseWord(word: string): string {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
