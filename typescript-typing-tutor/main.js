'use strict';
const $characters = document.querySelectorAll('span');
if (!$characters) throw new Error('This $phrase query failed');
console.log($characters);
let currentIndex = 0;
let $currentCharacter = $characters[currentIndex];
console.log('currentCharacter:', $currentCharacter);
function typing(event) {
  if (currentIndex === $characters.length) {
    return;
  } else if (event.key === $currentCharacter.textContent) {
    $currentCharacter.className = 'correct';
    currentIndex++;
    $currentCharacter = $characters[currentIndex];
    $currentCharacter.className = 'current';
  } else {
    $currentCharacter.className = 'current incorrect';
  }
}
document.addEventListener('keydown', typing);
