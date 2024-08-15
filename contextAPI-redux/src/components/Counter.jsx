import React , {useContext} from 'react';
import { CounterContext } from '../context/CountContextProvider';

//you can use hooks here also
const Counter = () => {
    const counterState = useContext(CounterContext);
    const {count , setCount} = counterState;
  return (
    <div>
        <button onClick={() => setCount(curr => curr+1)}>Inc+</button>
        <p>My Count is :: {count}</p>
        <button onClick={() => setCount(curr => curr-1)}>Dec-</button>
    </div>
  )
}

export default Counter