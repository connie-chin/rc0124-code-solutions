function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement;
  console.log('eventTarget.name: ', eventTarget.name); // logs the input element ^
}

function handleBlur(event: Event): void {
  console.log('blur event was fired');
  const eventTarget = event.target as HTMLInputElement;
  console.log('eventTarget.name: ', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log(`value of ${eventTarget.name}:`, eventTarget.value);
}

// const $formControls = document.getElementById('contact-form').elements;
// if(!$formControls) throw new Error('The $formControls query failed');

const $name = document.querySelector('#user-name');
if (!$name) throw new Error('The $name query failed');

const $email = document.querySelector('#user-email');
if (!$email) throw new Error('The $email query failed');

const $message = document.querySelector('#user-message');
if (!$message) throw new Error('The $message query failed');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
