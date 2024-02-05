/* exported capitalizeWords */
// do we need to change the string to an array?
// capitalize first letter of each element
// lowercase rest of letters of the element
// ^ do this per word

// function that takes a string in and returns a diff string
// empty string?
// break the string into separate words
// for loop to go through each word
// capitalize index 1
// make rest of word lowercase
// add the capitalized letter and rest of the word, push this word into the empty string
// return the new string

// function that takes a string in and returns a string
// empty array
// break the string into separate words
// for loop of each word, but I want it to go on as long as how many words there are
// per word, capitalize first letter of each element
// per word, lowercase rest of letters of the element
// push the word into an empty array?
// change the array into a string and return that

function capitalizeWords(string: string): any {
  const stringToArray = string.split(' '); // creates a new array of words from the sentence, separated by ' '
  let result = '';
  for (let i = 0; i < stringToArray.length; i++) {
    // loops through the array of words I have created
    const str = stringToArray[i];
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfWord = str.substring(1).toLowerCase();
    result += firstLetter + restOfWord;
    if (i < stringToArray.length - 1) {
      result += ' ';
    }
  }
  return result;
}
