/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i <= words.length - 1; i++) {
    var newWord = words[i] + suffix;
    newArray.push(newWord);
  }
  return newArray;
}
