import React from 'react'
import card_img from "../../assets/images/cardImage.svg"
import "./card.css"

function Card() {
  return (
    
        <div className='card-container'>
            <div className="card">
                <div className='card-content'>                 
                        <h1 className='card-title'>Payment has never been this <span className='color-green'>easy</span></h1>
                        <p className='card-description'>One secure platform to pay, get paid, and manage all your finances better!</p>
                        <div className='card-buttons'>
                            <a href='https://flickuser.page.link/userinvite' className="axil-btn btn-fill-primary">Join as a User </a>
                            <a href='https://flickmerchants.page.link/tV8u' className="btn-no-fill">Open a Business Account</a>                            
                        </div>
             
                </div>

                <div className='card-image'>                    
                    <img src={card_img} alt="card"/>     
                </div>
            </div>
        </div>
    

  )
}

export default Card;