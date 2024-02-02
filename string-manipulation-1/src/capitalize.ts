/* exported capitalize */
function capitalize(word: string): string {
  const firstLetter: string = word[0].toUpperCase();
  const restOfWord: string = word.substring(1).toLowerCase();
  return firstLetter + restOfWord;
}
