import { useState } from 'react';
import './App.css'; //because used App.css, if used index.css, wouldn't need this to be imported as that takes care of css for whole app?

export function HotButton() {
  const [clicks, setClicks] = useState(0);

  function getClassName() {
    if (clicks < 3) {
      return 'first';
    } else if (clicks < 6) {
      return 'second';
    } else if (clicks < 9) {
      return 'third';
    } else if (clicks < 12) {
      return 'fourth';
    } else if (clicks < 15) {
      return 'fifth';
    } else if (clicks < 18) {
      return 'sixth';
    } else if (clicks < 21) {
      return 'seventh';
    }
  }
  const buttonTempOrder = getClassName();

  return (
    <button className={buttonTempOrder} onClick={() => setClicks(clicks + 1)}>
      Hot Button: {clicks}
    </button>
  );
}
