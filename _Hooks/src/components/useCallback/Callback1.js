//----WITHOUT USING CALLBACK HOOKS----//
// first we can handle unwanted render of child component with react memo but if you pass props 
// to child components then it can not be optimize by memo because here function props is recreated 
// every times means different references is created on every render, so child components notice
//  props is changes , and we know that if props will change react automatically re-render that component ,
//  so we use here useCallback hooks to prevent unwanted render of child components , or we can give 
// dependencies to call back , so that function will be re-created when dependency will change. 
// like you know For simple apps when i use useCallback hooks, the performance benefit might be negligible
// but in larger applications this hook wii give good impact on performance.


// import React, { useState } from "react";
// import ChildComp from "./ChildComp";

// const Callback1 = () => {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState("");

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <p>Input Value : {value}</p>
//       <p>Count: {count}</p>
//       {/* <ChildComp/> */}
//       <ChildComp handleClick={handleClick} />
//     </div>
//   );
// };

// export default Callback1;


//---- WITH USING CALLBACK HOOKS -----//

import React, { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

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
      <p>input value : {value}</p>
      <p>Count: {count}</p>
      <ChildComp handleClick={handleClick} />
    </div>
  );
};

export default Callback1;
