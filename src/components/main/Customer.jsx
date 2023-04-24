import React from 'react'
import './animate.css'
import "animate.css/animate.min.css";
import AnimationOnScroll  from 'react-animate-on-scroll';
import './content.css';

function Customer() {
  return (
    <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}> 
    <div className='customer-section'>
            <h1 className='customer-title'>
            Customers all over Nigeria trust Flick to transact faster.
            </h1>
            <div className='customer-count'>
                <p className='customer-description'>Connect your bank accounts, view your net worth in a glance, and make contactless payments.</p>
                <div className='count-flex-row'>
                    <div className='count-flex-column'>
                        <h1>20<span>+</span></h1>
                        <p>Bank integrations</p>
                    </div>
                    <div className='count-flex-column'>
                        <h1>$2M<span>+</span></h1>
                        <p>Transactions processed</p>
                    </div>
                    
                    <div className='count-flex-column'>
                        <h1>72k<span>+</span></h1>
                        <p>Transactions completed</p>
                    </div>
                    
                    
                </div>
            </div>
    </div>
    </AnimationOnScroll>
  )
}

export default Customer;