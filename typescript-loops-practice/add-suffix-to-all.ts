/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArray = [];
  for (let i = 0; i <= words.length - 1; i++) {
    const newWord = words[i] + suffix;
    newArray.push(newWord);
  }
  return newArray;
}
