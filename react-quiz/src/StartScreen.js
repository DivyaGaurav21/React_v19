import React from 'react'

const StartScreen = ({numOfQuestions}) => {
  return (
    <div className='start'>
        <h2>Welcome to React Quiz!</h2>
        <h3>{numOfQuestions} questions for test your react skill !</h3>
        <button className='btn btn-ui'>Let's start</button>
    </div>
  )
}

export default StartScreen