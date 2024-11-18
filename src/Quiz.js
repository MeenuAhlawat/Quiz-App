import React, { useState } from 'react';
import "./style.css";
import Quizdata from "./Quizdata";
import Result from './Result';

const Quiz = () => {
  const [currentquestionstate, setcurrentquestionstate] = useState(0);
  const [condition, setcondition] = useState(false);
  const[selected,setselected]=useState(0);
  const[score,setscore]=useState(0)

  console.log(condition); 

  function Next() {
    UpdateScore()
    if (currentquestionstate < Quizdata.length - 1) {
      setcurrentquestionstate(currentquestionstate + 1);
      setselected(0);
    } else {
      setcondition(true);
    }
  }

  function tryagain() {
    setcondition(false);
    setcurrentquestionstate(0); 
    setselected(0);
    setscore(0);
  }
  function UpdateScore()
  {
    if(Quizdata[currentquestionstate].Answer==selected)
    {
      setscore(score+1)
    }
    
  }
  function Select(index)
  {
   setselected(index+1);
    
  }

  return (
    <div>
      <h1 className="heading">Quiz App</h1>
      <div className="container">
        {
          condition ? (
            <div>
              <Result Score={score} total={Quizdata.length} fun={tryagain} />
            </div>
          ) : (
            <div>
              <div className="question">
                <span id='question-number'>{currentquestionstate + 1}.</span>
                <span id='question-txt'>{Quizdata[currentquestionstate].Question}</span>
              </div>
              <div className="option-container">
                {Quizdata[currentquestionstate].Options.map((option, index) => (
                  <button className={selected===index+1?'option-btn checked':'option-btn'} onClick={()=>Select(index)}>{option}</button>
                ))}
                <br />
                <button type='button' className='next' onClick={Next}>Next</button>
                <br />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Quiz;
