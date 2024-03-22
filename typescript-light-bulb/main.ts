let isOn: boolean = true; // carrying a boolean value, we want a toggle effect. starting true

const $circleClick = document.querySelector('.circle');
if (!$circleClick) throw new Error('the $circleClick query failed');
const $container = document.querySelector('.container');
if (!$container) throw new Error('The $container query failed');

function cClicks(): void {
  if (!$circleClick || !$container)
    throw new Error('The $circleClick or $container query failed');
  isOn = !isOn; // whatever the initial state was, we are going to flip it. like from true to false
  if (isOn === false) {
    $container.className = 'container black';
    $circleClick.className = 'circle gray';
    // console.log(`it's off`);
  } else if (isOn === true) {
    $container.className = 'container';
    $circleClick.className = 'circle';
    // console.log(`it's on`);
  }
}
$circleClick.addEventListener('click', cClicks);
