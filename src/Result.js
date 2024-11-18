import React from 'react'

const Result = (props) => {

  
  return (
    <div className='show-score'>
    Your score:{props.Score} <br />
    Total score:{props.total} <br /> <br />
    <button className='try'onClick={props.fun} >try again</button>
    </div>
  )
}

export default Result