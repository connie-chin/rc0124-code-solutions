interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const products: Product[] = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];

const user = users.find(({ id }) => id === 2);
console.log('user:', user); // .find finds the first element in the array w the criteria n returns that

const expensiveProduct = products.find(({ price }) => price > 900);
console.log('expensiveProduct:', expensiveProduct);
