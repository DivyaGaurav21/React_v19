// import React, { useContext } from 'react'
// import { CounterContext } from './context/CountContextProvider';
// import Counter from './components/Counter';

// const App = () => {
//   const counterState = useContext(CounterContext);
//   const { count, setCount } = counterState;
//   return (
//     <div>
//       <p>Count is : {count}</p>
//       <Counter />
//     </div>
//   )
// }

// export default App;

// ================================//
// by using context custom  Hooks 

// import React from 'react';
// import { useCounter } from './context/CountContextProvider';

// const App = () => {
//   const counterContext = useCounter();
//   const { count, setCount } = counterContext;
//   return (
//     <div>
//       <button onClick={() => setCount(curr => curr - 1)}>DEC</button>
//       <p>Count is : {count}</p>
//       <button onClick={() => setCount(curr => curr + 1)}>INC</button>
//     </div>
//   )
// }

// export default App

// ===============================//
//by using context Theme

// import React from 'react'
// import { useTheme } from './context/ThemeContextProvider'

// const App = () => {
//   const themeContextObject  = useTheme( );
//   const {theme , toggleTheme} = themeContextObject;
//   return (
//     <div>
//       <p className={`${theme === "light" ? "text-black bg-slate-200" : "text-red-400 bg-yellow-300"} p-4`}>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, qui. Hic explicabo nisi sapiente animi ipsa dolorum molestias commodi incidunt.
//       </p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   )
// }

// export default App

// ===============================//
// by using Auth Context

import React from 'react'
import { useUserAuth } from './context/UserContextProvider'

const App = () => {
  const userContext = useUserAuth();
  
  return (
    <div>App</div>
  )
}

export default App