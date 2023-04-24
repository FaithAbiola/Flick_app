import React from 'react'
import AnimationOnScroll from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'
import './joinFlick.css';
import JoinFlickSteps from './JoinFlickSteps';
import one from "../../assets/images/one.svg"
import two from "../../assets/images/two.svg"
import three from "../../assets/images/three.svg"

function JoinFlick() {
  return (
    <AnimationOnScroll animateIn="zoomIn" duration={1} delay={800} animateOnce={true}>
    <div className='join-flick-section'>
      <div className='join-flick-left'>
          <div className='join-flick-left-center'>
              <h1>Join Flick business today!</h1>
              <p>Flick is simple to set up. Just download the app and you’re ready to go.</p>
              <Link className='get-started-btn' to="https://getflick.onelink.me/hcLy/InviteUser">
                  Get Started
              </Link>
          </div>
        
      </div>

      <div className='join-flick-right'>
        <JoinFlickSteps
            bgColor="#EAF8F8"
            image={one}
            title="Download the app"
            description="Join our 22,000 users and start managing your money with ease today."
            />
        <JoinFlickSteps
            bgColor="#F6FAFD"
            image={two}
            title="Securely link your account"
            description="From cash to investments, you can easily connect all your accounts."
            />

        <JoinFlickSteps
            bgColor="#FFF8ED"
            image={three}
            title="Start transacting"
            description="Experience a fresh way to manage your money and transact faster today."
            />
      </div>  
    </div>
    </AnimationOnScroll>
  )
}

export default JoinFlick