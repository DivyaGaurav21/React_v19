// import React, { useRef, useState } from "react";

// const UseRefHooks = () => {
//   const [myNum, setMyName] = useState(0);

//   const inputNum = useRef();
//   const inputText = useRef();

//   const numChangeEvent = () => {
//     console.log("numChangeEvent");
//     console.log(inputNum.current);
//     // inputNum.current.style.height = "200px";
//   }
//   const textChangeEvent = () => {
//     console.log("textChangeEvent");
//     console.log(inputText.current)
//   }

//   console.log("rendering...");

//   return (
//     <div>
//       <h1>USE REF HOOKS</h1>
//       <form>
//         <input
//           ref={inputNum}
//           value={myNum}
//           type="number"
//           onChange={(e) => setMyName(e.target.value)}
//         />
//         <input
//         ref={inputText}
//           value={myNum}
//           type="text"
//           onChange={(e) => setMyName(e.target.value)}
//         />
//       </form>
//       <h2>Value is : {myNum}</h2>
//       <button onClick={() => numChangeEvent()}>NUMBER</button>
//       <button onClick={() => textChangeEvent()}>TEXT</button>
//     </div>
//   );
// };

// export default UseRefHooks;

// ================================================ //

// import React, { useEffect, useRef, useState } from 'react'

// const UseRefHooks = () => {

//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//       count.current = count.current + 1;
//     });
//   return (

//       <>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <h1>Render Count: {count.current}</h1>
//       </>
//     );
// }

// export default UseRefHooks;

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

import React, { useEffect, useRef, useState } from "react";

const UseRefHooks = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
};

export default UseRefHooks;
