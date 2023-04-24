import React from 'react'

import './joinFlick.css'

function JoinFlickSteps({image,title,description,bgColor}) {
  return (
    <div className='join-flick-steps' style={{backgroundColor: bgColor}}>
        <img className='steps-image' src={process.env.PUBLIC_URL + image} alt="number" />
        <div className='join-flick-content'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default JoinFlickSteps