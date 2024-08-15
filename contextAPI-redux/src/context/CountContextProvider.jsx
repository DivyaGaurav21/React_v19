// import React , {createContext , useState} from 'react'

// export const CounterContext = createContext(null);

// const CountContextProvider = ({children}) => {
//     const [count , setCount] = useState(1);
//   return (
//     <CounterContext.Provider value={{count , setCount}}>
//         {children}
//     </CounterContext.Provider>
//   )
// }

// export default CountContextProvider;

import React , {createContext , useContext , useState} from 'react'

const CounterContext = createContext(null);

export const CountContextProvider = ({children}) => {
    const [count , setCount] = useState(0);
  return (
    <CounterContext.Provider value={{count , setCount}}>
        {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
    const counterContext = useContext(CounterContext);
    if(!counterContext) {
      throw new Error("context not available");
    }
    return counterContext;
}