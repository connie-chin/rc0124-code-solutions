/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
// logical && operator
v1 && console.log('v1 is truthy'); // right side of operator is returned
v2 && console.log('v2 is truthy'); // v2 is empty string and falsy, so v2 should be returned
// returns first falsy, but if not it will return last truthy value
// logical || operator
const config1 = v1 || 'default-value'; // returns first truthy value. bc v1 is true, we return that
const config2 = v2 || 'default-value';
console.log('configs', config1, config2);
// nullish coalesching operator
const cfg1 = v1 ?? 'default-value'; // returns the first value that is not undefined or null
const cfg2 = v2 ?? 'default-value'; // returns empty string bc v2 is not undefined or null
const cfg3 = v3 ?? 'default-value'; // v3 is undefined, so default-value is returned
console.log('cfgs', cfg1, cfg2, cfg3);
// conditional (ternary) operator (?)
const tern1 = v1 ? 'truthy' : 'falsy'; // if expression is truthy, the left hand side of colon gets returned
const tern2 = v2 ? 'truthy' : 'falsy'; // v2 is falsy, so we skip truthy and go to falsy
console.log('terns', tern1, tern2);
// optional chaining operator (?.), keeps your code from breaking
const oc1 = v1?.value;
const oc2 = v5.details?.address?.city;
console.log('ocs', oc1, oc2);
// spread operator. spreads the values and puts them into a new object, can add a new property or value also
const sObj = { ...v1, foo: 'bar' }; // taking properties and values from an object, opening them up and adding them to another
console.log('sObj', sObj);

const sArr = [100, ...v4]; // a new array being built, we are putting in 100, and spreading out whatever v4 is, and adding those elements into this new array
console.log('sArr', sArr); // order matters^
