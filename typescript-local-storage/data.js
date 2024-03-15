'use strict';
let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON); //this is a real array. which is why we are reassigning and not pushing.
}
// window.addEventListener('beforeunload', (event: Event) =>
function forBeforeUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
window.addEventListener('beforeunload', forBeforeUnload);
