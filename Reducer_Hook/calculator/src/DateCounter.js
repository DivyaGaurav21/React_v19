import React, { useReducer } from 'react'


const initialState = { count: 0, step: 1 }

function reducer(state, action) {
  console.log(state, action);
  // // return state + action;
  // if (action.type === "inc") {
  //   return { ...state, count: state.count + state.step };
  // }
  // if (action.type === "dec") {
  //   return { ...state, count: state.count - state.step };
  // }
  // if (action.type === "setCount") {
  //   return { ...state, count: action.payload };
  // }
  // if (action.type === "setStep") {
  //   return { ...state, step: action.payload }
  // }
  // if (action.type === "reset") {
  //   return initialState;
  // }
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload }
    case "reset":
      return initialState;
    default:
      throw new Error("unknown action");
  }
}

const DateCounter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // const [step, setStep] = useState(1);

  const date = new Date("july 23 2023");
  date.setDate(date.getDate() + count);


  const inc = () => {
    dispatch({ type: "inc" });
    // setCount(count => count + step);
  }
  const dec = () => {
    dispatch({ type: "dec", payload: 1 })
    // setCount(count => count - step);
  }
  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };
  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };
  const reset = function () {
    dispatch({ type: "reset" })
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className='counter'>
      <div>
        <input type='range' min="0" max="10" onChange={defineStep} value={step} />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Rst</button>
      </div>
    </div>
  )
}

export default DateCounter;
