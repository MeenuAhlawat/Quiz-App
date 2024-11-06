import React, { useState } from 'react'
import "./style.css"
import Quizdata from "./Quizdata"
import Result from './Result'
const Quiz = () => {
  const[currentquestionstate,setcurrentquestionstate]=useState(0)

  function Next()
  {
    setcurrentquestionstate(currentquestionstate+1)
  }
  return (
    <div>
        <h1 className="heading">Quiz App</h1>
        <div className="container">
            
            <div className="question">
            <span id='question-number'>{currentquestionstate+1}.</span>
            <span id='question-txt'>{Quizdata[currentquestionstate].Question}</span>
            </div>
            <div className="option-container">
            {
              Quizdata[currentquestionstate].Options.map(function(option)
            {
            return(
              <button className='option-btn'>{option}</button>
            )
              
            })
            }
            <br />
            <button type='button' className='next' onClick={Next}>Next</button><br />
            </div>
        </div>
    </div>
  )
}

export default Quiz
