/* exported countdown */
function countdown(number: number): number[] {
  const numbers: number[] = [];
  for (let i = number; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers;
}
