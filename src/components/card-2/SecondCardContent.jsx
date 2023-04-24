import React from 'react'


function SecondCardContent({title,description}) {
  return (
    <div className='card-container'>
        <div className='card-inner-content'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SecondCardContent