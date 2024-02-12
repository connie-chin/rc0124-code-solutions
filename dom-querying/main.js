'use strict';
console.log('hello, world');
const $h1 = document.querySelector('h1');
console.log('$h1', $h1);
console.dir($h1); //shows us all properties available on the object, here the h1 is the object
const $exp = document.querySelector('#explanation');
console.log('$exp', $exp);
console.dir($exp);
const $hint = document.querySelector('.hint');
console.log('$hint', $hint);
console.dir($hint);
const $pMatches = document.querySelectorAll('p'); //nodelist is array like, numbered like an array.
console.log('$pMatches', $pMatches);
const $exMatches = document.querySelector('.example-link');
console.log('$exMatches', $exMatches);
