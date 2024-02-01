'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumbers = 1;
  while (currentNumbers <= 10) {
    numbers.push(currentNumbers);
    currentNumbers++;
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  const getEvenNumbers = [];
  let currentNumbers = 2;
  while (currentNumbers <= 20) {
    getEvenNumbers.push(currentNumbers);
    currentNumbers += 2;
  }
  return getEvenNumbers;
}
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word; //cant push into a string, just add to it?
    count++;
  }
  return repeated;
}
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
function getKeys(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
function getValues(object) {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
