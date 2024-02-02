/* exported sumAll */
function sumAll(numbers) {
  var counter = 0;
  for (var i = 0; i <= numbers.length - 1; i++) {
    counter += numbers[i];
  }
  return counter;
}
