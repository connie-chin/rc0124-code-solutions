const $click = document.querySelector('.click-button');
if (!$click) throw new Error('The $click query failed');

function handleClick(event: any): any {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$click.addEventListener('click', handleClick);

const $hover = document.querySelector('.hover-button');
if (!$hover) throw new Error('The $hover query failed');

function handleMouseover(event: any): any {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hover.addEventListener('mouseover', handleMouseover);

const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('The $doubleClick query failed');

function handleDoubleClick(event: any): any {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
