interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

function submitListener(event: Event): void {
  event.preventDefault(); // page refreshing to send data somewhere, it comes up in url
  const $formElements = $contactForm.elements as FormElements; // saving HTML elements property, check the element in console.log
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value, // input with name set to email
    message: $formElements.message.value,
  };
  console.log('message data: ', formObject);
  $contactForm.reset(); // resets the form value
}

$contactForm.addEventListener('submit', submitListener);
