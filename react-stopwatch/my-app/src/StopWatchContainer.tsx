// import { useState } from 'react';
// import { FaPlay } from 'react-icons/fa';

// export function StopWatch() {
// const [elapsedSeconds, setElapsedSeconds] = useState(0);
// const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

// function forSetInterval () {
//   if (intervalId !== undefined) {
//     clearInterval(intervalId);
//   }
//   else if (intervalId === undefined) {
//     console.log('in here');
//     setIntervalId(intervalId);
//   }
// }

//   return (
//     <div className="container">
//       <div className="stopwatch">
//         <span>{elapsedSeconds}</span>
//       </div>
//       <div className="icon" onClick={() => setIntervalId(forSetInterval)}>
//         <FaPlay />
//       </div>
//     </div>
//   );
// }
