const heroes: string[] = ['batman', 'spiderman', 'hulk', 'venom'];
let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('value of random hero: ', randomHero);
// ARRAY
const library: any = [
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
const lastBook: string = library.pop();
console.log('value of last book: ', lastBook);

const firstBook: string = library.shift();
console.log('value of firstBook: ', firstBook);

const js: object = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: object = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);

library.splice(1, 1);
console.log('value of library: ', library);

// String
const fullName: string = 'Connie Chin';
const firstAndLastName: string = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);

// object
interface Employee {
  name: string;
  age: number;
  position: string;
}
const employee: Employee = {
  name: 'Connie',
  age: 27,
  position: 'cleaner',
};

const employeeKeys: object = Object.keys(employee);
console.log('value of employeeKeys: ', employeeKeys);
const employeeValues: object = Object.values(employee);
console.log('value of employeeValues: ', employeeValues);
const employeePairs: object = Object.entries(employee);
console.log('value of employeePairs: ', employeePairs);
