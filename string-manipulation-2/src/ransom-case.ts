/* exported ransomCase */
// create empty new string
// use for loop to go through string
// if the string index % 2 is 0,
// make it uppercased
// else
// make it lowercased

function ransomCase(string: string): string {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }
  return newWord;
}
