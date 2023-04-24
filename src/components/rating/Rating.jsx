import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import Carousel from "react-elastic-carousel";
import { RatingData } from "./RatingData";
import './rating.css'
import star from "../../assets/images/star.svg"
import rating from "../../assets/images/ratingImg.svg"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2  },
  { width: 768, itemsToShow: 2 },
  { width: 1280, itemsToShow: 2 },
  
];

const Rating = () => {
  return (
    <Carousel breakPoints={breakPoints} pagination={false} className='carousel-root'>
      {RatingData.map((item, index) => (
        <AnimationOnScroll animateIn="zoomIn" duration={1} delay={800} animateOnce={true} key={index}>
        <div className="rating" key={index} >
          <div className="rating-img-content">
            <img className="rating-img"  src={item.comment} alt="rating" />
            <h3 className="name">{item.name}</h3>
            <img className="star-img" src={star} alt="star" />
            <img className="quote-img" src={rating} alt="quote" />
          </div>
          <p className="rating-description">{item.comment}</p>
        </div>
        </AnimationOnScroll>
      ))}
      
    </Carousel>
   
    
  );
};

export default Rating;