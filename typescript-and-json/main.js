'use strict';
const books = [
  {
    isbn: '1234',
    title: 'Cat in the Hat',
    author: 'Dr. Seuss',
  },
  {
    isbn: '2345',
    title: 'Moby Dick',
    author: 'Herman Melville',
  },
  {
    isbn: '3456',
    title: 'boyhood',
    author: 'who knows',
  },
];
console.log('array of books:', books);
console.log('array stringified:', JSON.stringify(books));
console.log('type of:', typeof JSON.stringify(books));
const studentInfo = '{"Number id": "6021","name": "Macy lane"}';
console.log('studentInfo:', studentInfo);
console.log('type of: ', typeof studentInfo);
const obj = JSON.parse(studentInfo);
console.log('new obj:', obj);
console.log('type of:', typeof obj);
