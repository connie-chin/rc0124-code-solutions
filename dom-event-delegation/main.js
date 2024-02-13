'use strict';
const $click = document.querySelector('.task-list');
if (!$click) throw new Error('The $click query failed');
function handleClick(event) {
  const eventTarget = event.target;
  console.log('eventTarget: ', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const closest = eventTarget.closest('.task-list-item');
    console.log('closest:', closest?.tagName);
    closest?.remove();
  }
}
$click.addEventListener('click', handleClick);
