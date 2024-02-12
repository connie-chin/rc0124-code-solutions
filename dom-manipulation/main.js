'use strict';
let buttonClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
function addClicks() {
  buttonClicks++;
  if (!$hotButton || !$clickCount)
    throw new Error('The $hot button or $clickCount query failed');
  $clickCount.textContent = 'Clicks: ' + buttonClicks;
  if (buttonClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (buttonClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (buttonClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (buttonClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (buttonClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', addClicks);
