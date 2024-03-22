import { useState } from 'react';

export function ToggleSwitch() {
  const [toggle, setToggle] = useState(false); //starts off
  function forToggleState() {
    if (toggle === false) {
      return 'isOff';
    } else if (toggle === true) {
      //toggle is "on"
      return 'isOn';
    }
  }
  const toggleState = forToggleState();

  return (
    <div>
      <div id="wrapper" className={toggleState}>
        <div
          id="slider"
          className={toggleState}
          onClick={() => setToggle(!toggle)}></div>
      </div>
      <p>{toggle ? 'ON' : 'OFF'}</p>
    </div>
  );
}
