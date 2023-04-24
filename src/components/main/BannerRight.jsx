import React from 'react'
import './content.css'
import AnimationOnScroll from "react-animate-on-scroll";
import './animate.css';
import "animate.css/animate.min.css";

function BannerRight({subtitle,title,description,image}) {
  return (
    <div className='banner-section' >
        <div className='banner-content-right'>
          <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
            {subtitle && <span>{subtitle}</span>}
            <h1>{title}</h1>
            <p>{description}</p>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}>
        <img className='banner-img' src={image} alt="Banner" />
        </AnimationOnScroll>
    </div>
  )
}

export default BannerRight