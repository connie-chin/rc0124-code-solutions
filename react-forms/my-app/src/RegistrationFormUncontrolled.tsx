import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); //passing the entire form into FormData

    const formJson = Object.fromEntries(formData.entries()); //is this destructuring of the object? go back n console log these
    console.log(formJson);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
