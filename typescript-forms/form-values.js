'use strict';
const $contactForm = document.querySelector('#contact-form');
function submitListener(event) {
  event.preventDefault(); //page refreshing to send data somewhere, it comes up in url
  const $formElements = $contactForm.elements; //saving HTML elements property, check the element in console.log
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value, //input with name set to email
    message: $formElements.message.value,
  };
  console.log('message data: ', formObject);
  $contactForm.reset(); //resets the form value
}
$contactForm.addEventListener('submit', submitListener);
