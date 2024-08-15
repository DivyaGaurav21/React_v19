//---- WITH USING CALLBACK HOOKS -----//

// import React, { useState } from "react";
// import List from "./List";

// const Callback2 = () => {
//   const [number, setNumber] = useState(1);
//   const [dark, setDark] = useState(false);

//   //may be this function called for API Call
//   const getItem = () => {
//     return [number, number + 1, number + 2];
//   };

//   const theme = {
//     backgroundColor: dark ? "#333" : "#fff",
//     color: dark ? "#fff" : "#333",
//   };

//   return (
//     <div style={theme}>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark((prevDark) => !prevDark)}>Toggle</button>
//       <List getItem={getItem} />
//     </div>
//   );
// };

// export default Callback2;


//---- WITH CALLBACK ------- //
//---- WITH USING CALLBACK HOOKS -----//

import React, { useCallback, useState } from "react";
import List from "./List";

const Callback2 = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //may be this function called for API Call
  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  } , [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Toggle</button>
      <List getItem={getItem} />
    </div>
  );
};

export default Callback2;

