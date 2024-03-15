const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab'); // nodelist of tabs, so we can loop over
const $views = document.querySelectorAll('.view'); // nodelist of views

if (!$tabContainer) throw new Error('This $tabContainer query failed');
if (!$tabs) throw new Error('This $tabs query failed');
if (!$views) throw new Error('This $views query failed');

$tabContainer.addEventListener('click', forTabContainer);

function forTabContainer(event: Event): any {
  const $eventTarget = event.target as HTMLDivElement; // capture which event was clicked on, when we use type assertion we are letting typescript know what we are expecting
  // console.log($eventTarget);   $eventTarget is "tab active"
  // $tabs[i] is tab active
  if ($eventTarget.matches('.tab')) {
    // if this was a tab, go into this
    for (let i = 0; i < $tabs.length; i++) {
      // console.log($eventTarget)
      // console.log($tabs[i])
      if ($tabs[i] === $eventTarget) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  } else {
    return; // needed handling for outside of tab clicking
  }
  const $dataView = $eventTarget.dataset.view; // eventTarget. dataset looks at anything  w word data in it, then we are looking at the view
  // capture the data view to link these together
  for (let i = 0; i < $views.length; i++) {
    // looping over $views
    if ($views[i].getAttribute('data-view') === $dataView) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'view hidden';
    }
  }
}
