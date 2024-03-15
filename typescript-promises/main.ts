import { takeAChance } from './take-a-chance.js';

// const name = 'George';

takeAChance('George')
  .then((success) => console.log(success))
  .catch((error) => console.error(error.message));
// any human readable variable
