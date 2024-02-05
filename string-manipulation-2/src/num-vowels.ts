/* exported numVowels */

// a function that takes a string in and counts its vowels, then returns that number
// counter variable declared to 0 here.
// a for loop going through all the letters in the string
// if the letter is a vowel
// add it to counter variable
// return the counter variable

function numVowels(string: string): number {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A') {
      counter += 1;
    } else if (string[i] === 'e' || string[i] === 'E') {
      counter += 1;
    } else if (string[i] === 'i' || string[i] === 'I') {
      counter += 1;
    } else if (string[i] === 'o' || string[i] === 'O') {
      counter += 1;
    } else if (string[i] === 'U' || string[i] === 'u') {
      counter += 1;
    }
  }
  return counter;
}
