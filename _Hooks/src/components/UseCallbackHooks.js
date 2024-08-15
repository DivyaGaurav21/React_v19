import React from 'react'

const UseCallbackHooks = () => {
  return (
    <div>UseCallbackHooks</div>
  )
}

export default UseCallbackHooks



// ================================================================//
// import React, { useState, useCallback } from 'react';


// const UseCallbackHooks = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   // Memoize the increment function
//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <input type="text" value={text} onChange={handleTextChange} />
//       <ChildComponent onIncrement={increment} />
//     </div>
//   );
// };

// const ChildComponent = ({ onIncrement }) => {
//   console.log('ChildComponent re-rendered');

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <button onClick={onIncrement}>Increment from Child</button>
//     </div>
//   );
// };

// export default UseCallbackHooks;
