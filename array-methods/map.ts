interface Prices {
  price: number;
  salePrice: number;
}

const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const map1: Prices[] = prices.map((originalNum) => ({
  price: originalNum,
  salePrice: originalNum / 2,
})); // creating a new array with .map, that is an array of objects. map also doesnt mutate the original array, it makes a new one. wrapping the object in parenthesis so code knows its not a code block
console.log('Price Object:', map1);

const map2 = prices.map((price) => `$${price.toFixed(2)}`); // means two decimal places
console.log('Formatted prices:', map2);
