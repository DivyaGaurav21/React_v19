import React, { useEffect, useReducer } from 'react'

import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'

// status : 'loading' , 'errror' , 'ready' , 'active' , 'finished'
const initialState = {
  status: 'loading',
  questions: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    default:
      throw new Error("Action Unknown");
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions } = state;
  const numOfQuestions = questions.length;
  useEffect(() => {
    fetch("https://fakequizapi.onrender.com/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataRecieved', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }))
  }, [])

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numOfQuestions={numOfQuestions} />}
      </Main>
    </div>
  )
}

export default App
