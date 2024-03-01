'use strict';
async function userInfo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`); //the ok will be false if theres a 404 message
    const userObjects = await response.json(); //parse data from API to javascript structure so we can use it ? json returns a promise so we need to wait for it
    console.log('userInfo:', userObjects);
  } catch (error) {
    console.log('fetch failed', error);
  }
}
userInfo();
async function favPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/22');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const myPokemon = await response.json();
    console.log('myPokemon:', myPokemon);
  } catch (error) {
    console.log('fetch failed', error);
  }
}
favPokemon();
