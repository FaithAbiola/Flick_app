import React from 'react'
import {AnimationOnScroll} from "react-animation-on-scroll"
import "./MainContent.scss"
import './animate.scss';

function BannerLeft({title,description,image}) {
  return (
    <div className='banner-section  banner-section-left'>
       <AnimationOnScroll animateIn="slideInLeft" duration={2} delay={300} animateOnce={true}>
         <img className='banner-img' src={image} alt="Banner" />
        </AnimationOnScroll>
        <div className='banner-content-left'>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
              <h1>{title}</h1>
              <p>{description}</p>
          </AnimationOnScroll>
        </div>
    </div>
  )
}

export default BannerLeft