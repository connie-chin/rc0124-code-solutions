interface Prices {
  price: number;
  salePrice: number;
}

const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const map1: Prices[] = prices.map((originalNum) => ({
  price: originalNum,
  salePrice: originalNum / 2,
}));
console.log('Price Object:', map1);

const map2 = prices.map((price) => `$${price.toFixed(2)}`);
console.log('Formatted prices:', map2);
