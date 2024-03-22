import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export function ValidatedInput() {
  const x = <FaXmark className="x" />;
  const check = <FaCheck className="check" />;
  const [password, setPassword] = useState('');

  function handleChange() {
    if (password.length === 0) {
      return 'A password is required';
    } else if (password.length < 8) {
      return 'Your password is too short';
    } else if (password.length >= 8) {
      return '';
    }
  }
  const inputMessage = handleChange();

  function forIcon() {
    if (password.length >= 8) {
      return check;
    } else {
      return x;
    }
  }
  const whichIcon = forIcon();

  return (
    <div>
      <label>
        Password
        <div>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
          />
          <i>{whichIcon}</i>
        </div>
      </label>
      <div>
        <p>{inputMessage}</p>
      </div>
    </div>
  );
}
