'use strict';
const intervalID = setInterval(myCallback, 1000);
setInterval(myCallback, 1000);
let count = 4;
function myCallback() {
  const $countdownDisplay = document.querySelector('.countdown-display');
  if (!$countdownDisplay)
    throw new Error('This $countdownDisplay query failed');
  if (count > 0) {
    $countdownDisplay.textContent = count.toString();
    count--;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
  clearInterval(intervalID);
}
