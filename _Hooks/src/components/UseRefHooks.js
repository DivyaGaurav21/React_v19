import React, { useRef, useState } from 'react';

const UseRefHooks = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = window.setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 100);
    }
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h1>{time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default UseRefHooks;

// ==================================================== //

// import React, { useRef } from 'react';

// const FocusInput = () => {
//     const inputElement = useRef();

//     const focusInput = () => {
//       inputElement.current.focus();
//     };

//     return (
//       <>
//         <input type="text" ref={inputElement} />
//         <button onClick={focusInput}>Focus Input</button>
//       </>
//     );
// };

// export default FocusInput;

// ======================================================//

// import React, { useEffect, useRef, useState } from "react";

// const UseRefHooks = () => {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// };

// export default UseRefHooks;

// ================================================
//count down timer
// import React, { useState, useRef, useEffect } from 'react';

// const CountdownTimer: React.FC = () => {
//   const [seconds, setSeconds] = useState(10);
//   const [isActive, setIsActive] = useState(false);
//   const timerRef = useRef<NodeJS.Timeout | null>(null); // Mutable ref to store the timer ID

//   // Start the countdown timer
//   const startTimer = () => {
//     if (!isActive && seconds > 0) {
//       setIsActive(true);
//       timerRef.current = setInterval(() => {
//         setSeconds(prevSeconds => prevSeconds - 1);
//       }, 1000);
//     }
//   };

//   // Stop the countdown timer
//   const stopTimer = () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//     setIsActive(false);
//   };

//   // Reset the timer to the initial value
//   const resetTimer = () => {
//     stopTimer();
//     setSeconds(10);
//   };

//   // Effect to clean up the timer when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (seconds === 0) {
//       stopTimer(); // Automatically stop the timer when it reaches 0
//     }
//   }, [seconds]);

//   return (
//     <div>
//       <h1>Countdown: {seconds} seconds</h1>
//       <button onClick={startTimer} disabled={isActive}>
//         Start
//       </button>
//       <button onClick={stopTimer} disabled={!isActive}>
//         Stop
//       </button>
//       <button onClick={resetTimer}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default CountdownTimer;

