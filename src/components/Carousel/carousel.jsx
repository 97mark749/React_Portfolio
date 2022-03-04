import React from 'react'
import './carousel.scss';
import { useState } from 'react';
import Slider from 'react-slick';
//import uuid from 'react-uuid';
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs';
import {Intro,Hobbies,WorkStyle} from '../../components';

const Carousel = () => {
/*
const NextArrow = ({onClick}) => {
    return (
        <div className="arrow next" onClick={onClick}><BsArrowRightCircleFill/></div>
    )
};
const PrevArrow = ({onClick}) => {
    return (
        <div className="arrow prev" onClick={onClick}><BsArrowLeftCircleFill/></div>
    )
};

const[cardIndex,setCardIndex] = useState(0);

const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current,next) => setCardIndex(next),
};


  return (
   <Slider className='slider' {...settings}>
        {[<Intro/>,<Hobbies/>,<WorkStyle/>].map((item,idx) => (
            
            <div key={`item-${idx}`} className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                {item}        
            </div>
            
        )

        )};
    </Slider> 
    
  )*/
}

export default Carousel;