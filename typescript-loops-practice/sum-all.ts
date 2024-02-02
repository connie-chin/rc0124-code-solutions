/* exported sumAll */
function sumAll(numbers: number[]): number {
  let counter = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    counter += numbers[i];
  }
  return counter;
}
