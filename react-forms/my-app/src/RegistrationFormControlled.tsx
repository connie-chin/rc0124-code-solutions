import { useState } from 'react';
import { FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
