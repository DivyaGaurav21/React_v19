// The useCallback hook in React is used to memoize a function, preventing it from being re-created on every render unless one of its dependencies changes. This can be beneficial for performance optimization, especially when passing functions as props to child components that rely on reference equality to prevent unnecessary re-renders.

//---------------------------------------------------------------------//

//----WITHOUT USING CALLBACK HOOKS----//

// import React, { useState } from 'react';

// const ChildComponent = ({ onClick }) => {
//     console.log('Child component rendered');
//     return (
//         <button onClick={onClick}>Increment</button>
//     );
// };

// const  Callback1 = () => {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState('');

//     const handleClick = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//             />
//             <p>Count: {count}</p>
//             <ChildComponent onClick={handleClick} />
//         </div>
//     );
// };

// export default Callback1;

// In this example, every time the parent component re-renders
// (e.g., when the input value changes), a new handleClick function
//  is created. This causes the child component to re-render, even though
//  it might not be necessary.

//---- WITH USING CALLBACK HOOKS -----//

import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Increment</button>;
});

const Callback1 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default Callback1;


// In this version, handleClick is memoized using useCallback. The function 
// will only be re-created when count changes. As a result, the 
// ChildComponent will not re-render when the input value changes, since 
// handleClick maintains the same reference, and React.memo prevents the 
// child component from re-rendering unless its props change.
