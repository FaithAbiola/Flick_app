import React from 'react'
import AnimationOnScroll from 'react-animate-on-scroll'
import './animate.css'
import "animate.css/animate.min.css";
import './secondCard.css'
import play_logo from "../../assets/images/downloadAndriod.svg"
import app_logo from "../../assets/images/downloadApple.svg"
import video from "../../assets/images/videoPlay.svg"


function SecondCard() {
  return (

    <AnimationOnScroll animateIn="zoomIn" duration={2} delay={200} animateOnce={true}>
    <div className='card-download-container'>
            <div className='row card-download'>
                    <div className=' col-lg-8  card-download-center'>
                        <h6>DOWNLOAD THE FLICK APP</h6>
                        <h1>Start making confident <span>money moves</span>  today</h1>
                        <div className='card-download-links'>         
                                <a href="https://play.google.com/store/apps/details?id=com.qrabauser.app">
                                    <img src= {play_logo} alt="logo" />
                                </a>         
                                <a href="https://apps.apple.com/us/app/flick-payments-finance-mgt/id1586601881">
                                    <img src= {app_logo} alt="logo" />
                                </a>
                            
                        </div>
                    </div>
            </div>

        
            <img className='card-video-player' src={video} alt="video"/> 
     
    </div>
        </AnimationOnScroll>
  )
}

export default SecondCard