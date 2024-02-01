'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(5): ', convertMinutesToSeconds(5));
console.log('convertMinutesToSeconds(10): ', convertMinutesToSeconds(10));
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log(greet('Spongebob'));
console.log(greet('Beavis'));
let getArea = (width, height) => {
  return width * height;
};
console.log(getArea(17, 42));
console.log(getArea(22, 38));
let getFirstName = (person) => {
  return person.firstName;
};
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getFirstName({ firstName: 'John', lastName: 'Henry' }));
let getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log(getLastElement([true, true, false, true]));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'goodbye', 'Aloha']));
