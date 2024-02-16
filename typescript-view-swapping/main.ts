const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('This $tabContainer query failed');
if (!$tabs) throw new Error('This $tabs query failed');
if (!$views) throw new Error('This $views query failed');

$tabContainer.addEventListener('click', forTabContainer);

function forTabContainer(event: Event): any {
  const $eventTarget = event.target as HTMLDivElement;
  // console.log($eventTarget);
  // console.log('clicked');
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === $eventTarget) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  } else {
    return; // needed handling for outside of tab clicking
  }
  const $dataView = $eventTarget.dataset.view;
  // console.log($langTab);
  for (let i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === $dataView) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'view hidden';
    }
  }
}
