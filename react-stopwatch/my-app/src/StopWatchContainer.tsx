// import { useState } from 'react';
// import { FaPlay } from 'react-icons/fa';

// export function StopWatch() {
// const [elapsedSeconds, setElapsedSeconds] = useState(0);
// const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();//want to grab the number to assign it. later when thing is running we check the intervalid

// function forStartTimer () {
//   // elapsedSeconds
//   // if ( !== undefined) {
//   //   clearInterval(intervalId);
//   // }
//   // else if (intervalId === undefined) {
//   //   console.log('in here');
//   //   setIntervalId(intervalId);
//   // }
//   setElapsedSeconds((prev) => prev + 1), 1000;
// }

// console.log(elapsedSeconds);

// function setInterval(forStartTimer, 2000) {

// }

//   return (
//     <div className="container">
//       <div className="stopwatch">
//         <span>{elapsedSeconds}</span>
//       </div>
//       <div className="icon" onClick={() => setInterval(forStartTimer, 2000)}>
//         <FaPlay />
//       </div>
//     </div>
//   );
// }
