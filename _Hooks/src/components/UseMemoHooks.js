// ========================================================================//

//------------------------------Memoization--------------------------------//
// Memoization is an optimization technique used in JS for speed up the execution of a function
// by caching its results based on the input parameters.  The basic idea is to store the results
// of expensive function calls and return the cached result when the same inputs occur again.
//  This helps to avoid redundant computations and improve performance, especially in scenarios
//   where the same computation may be repeated with the same inputs.

// =================Example 1 ====================//
// let sum = 0;
// let sumCalc = (n) => {
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// let memoizeFunction = (callbackFn) => {
//   let cache = {}; //{'5' : 15 , '3':6}
//   return function (...args) {
//     console.log(cache);
//     let n = args[0];
//     if (n in cache) {
//         console.log("cache");
//       return cache[n];
//     } else {
//       //computation
//       console.log("computation");
//       let result = callbackFn(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// };

// console.time();
// const cacheFunction =  memoizeFunction(sumCalc);
// console.log(cacheFunction(100000));
// console.timeEnd();

// //now call function again with the same inputs//
// console.time();
// console.log(cacheFunction(100000));
// console.timeEnd();

//==================Example 2=====================//
// const memoizedFactorial = function () {
//   const cache = {};

//   function factorial(n) {
//     if (n <= 1) {
//       return 1;
//     }
//     if (cache[n]) {
//       // Return cached result if available
//       console.log("cache");
//       return cache[n];
//     } else {
//       // Calculate and cache the result for future use
//       console.log("computation done")
//       cache[n] = n * factorial(n - 1);
//       return cache[n];
//     }
//   }

//   return factorial;
// };

// console.time();
// const factorialFunction = memoizedFactorial();
// console.log(factorialFunction(10));
// console.timeEnd();

// console.time();
// console.log(factorialFunction(c10));
// console.timeEnd();

// ===============================================================//
// ==============================================================//

import React, { useState , useMemo } from "react";

const UseMemoHooks = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = (() => {
    return slowFunction(number);
  } );

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  function slowFunction(number) {
    console.log("calling slow function");
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoHooks;

//----------------Code 2 ------------------------//

// import React, { useState, useMemo } from "react";

// const UseMemoHooks = () => {
//   const [number, setNumber] = useState(0);
//   const [count, setCount] = useState(1);

//   // Expensive computation: find double
//   const calculateDouble = (num) => {
//     // console.log("AAAAAAa")
//     // for (let i = 0; i < 1000000000; i++) {}
//     // console.log("Expensive operation");
//     return num * 2;
//   };

//   // Memoize the result of calculateDouble function
//   const memoizeDouble = (() => calculateDouble(number));
//   console.log(memoizeDouble());

//   return (
//     <div>
//       <h2>Factorial Calculator</h2>
//       <label>
//         Enter a number:
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//       </label>
//       <p>
//         {/* Double of {number} is: <strong>{calculateDouble(number)}</strong> */}
//         Double of {number} is: <strong>{memoizeDouble}</strong>
//       </p>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//       count id {count}
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//     </div>
//   );
// };

// export default UseMemoHooks;

