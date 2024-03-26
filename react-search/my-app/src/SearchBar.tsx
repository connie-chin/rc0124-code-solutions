import { useState } from 'react';

export function SearchBar() {
  const [userInput, setUserInput] = useState('');

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        name="userInput"
        placeholder="search"
      />
    </>
  );
}
