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

console.log('array of books:', books, 'type of books:', typeof books);
console.log('array stringified:', JSON.stringify(books));
console.log('type of:', typeof JSON.stringify(books));

const studentJSON = '{"Number id": "6021","name": "Macy lane"}'; // outside needs to be single quote, inside must be double quote
console.log('studentJSON:', studentJSON);
console.log('type of: ', typeof studentJSON);

const studentObj = JSON.parse(studentJSON); // takes JSON data and turns it back into javascript object, so you can do more than what you could do with a string
console.log('new obj:', studentObj);
console.log('type of:', typeof studentObj);
