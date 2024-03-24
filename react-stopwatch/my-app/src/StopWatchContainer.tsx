import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0); //actual seconds that get updated
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>(); //want to grab the number to assign it. later when thing is running we check the intervalid

  const playIcon = <FaPlay />;
  const pauseIcon = <FaPause />;

  function incrementElapsedTime() {
    setElapsedTime((prev) => prev + 1);
  }
  function handleIconClick() {
    if (intervalId === undefined) {
      //timer paused
      const id = setInterval(incrementElapsedTime, 1000);
      setIntervalId(id);
    } else if (intervalId !== undefined) {
      //timer playing
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }
  function handleFaceClick() {
    if (intervalId) {
      //timer playing
      return;
    }
    setElapsedTime(0);
  }

  return (
    <div className="container">
      <div className="stopwatch" onClick={() => handleFaceClick()}>
        <span>{elapsedTime}</span>
      </div>
      <div className="icon" onClick={() => handleIconClick()}>
        <i>{intervalId ? pauseIcon : playIcon}</i>
      </div>
    </div>
  );
}
