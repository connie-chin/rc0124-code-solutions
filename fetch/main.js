'use strict';
async function userInfo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userObjects = await response.json();
    console.log('userInfo:', userObjects);
  } catch (error) {
    console.log('Error:', error);
  }
}
userInfo();
async function favPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/22');
    const myPokemon = await response.json();
    console.log('myPokemon:', myPokemon);
  } catch (error) {
    console.log('API failed');
  }
}
favPokemon();
