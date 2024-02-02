/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumbers: number = 1;
  while (currentNumbers <= 10) {
    numbers.push(currentNumbers);
    currentNumbers++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const getEvenNumbers: number[] = [];
  let currentNumbers: number = 2;
  while (currentNumbers <= 20) {
    getEvenNumbers.push(currentNumbers);
    currentNumbers += 2;
  }
  return getEvenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word; // cant push into a string, just add to it?
    count++;
  }
  return repeated;
}

function logEachCharacter(string: string): any {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object: Record<string, unknown>): any[] {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
