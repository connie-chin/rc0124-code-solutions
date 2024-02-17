const $click = document.querySelector('.task-list');
if (!$click) throw new Error('The $click query failed');

function handleClick(event: Event): void {
  const eventTarget = event.target as HTMLElement;
  console.log('event.target: ', eventTarget);
  console.log('event.target.tagName: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const closest = eventTarget.closest('.task-list-item'); // eventtarget, we are finding closest ancestor to task list item
    console.log('closest .task-list-item: ', closest);
    closest?.remove(); // this remove will only be called if this item exists, if it doesnt exist dont throw on error
  }
}
$click.addEventListener('click', handleClick);
