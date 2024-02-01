'use strict';
const heroes = ['batman', 'spiderman', 'hulk', 'venom'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
let randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
let randomHero = heroes[randomIndex];
console.log('value of random hero: ', randomHero);
//ARRAY
const library = [
  {
    title: 'cat in the hat',
    author: 'Dr Seuss',
  },
  {
    title: 'moby dick',
    author: 'herman melville',
  },
  {
    title: 'a Christmas Carol',
    author: 'Charles Dickens',
  },
];
let lastBook = library.pop();
console.log('value of last book: ', lastBook);
let firstBook = library.shift();
console.log('value of firstBook: ', firstBook);
const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);
//String
const fullName = 'Connie Chin';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
const employee = {
  name: 'Connie',
  age: 27,
  position: 'cleaner',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employeeValues: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employeePairs: ', employeePairs);
