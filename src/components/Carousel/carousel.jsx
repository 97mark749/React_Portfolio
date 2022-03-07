import React from 'react'
import './carousel.scss';
//import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs';
import {Experience,Design,WorkStyle} from '../../components';

const Carousel = () => {
    return(
        <div className="carousel__container">
            <div className="flex__container__card"><WorkStyle/></div>
            <div className="flex__container__card"><Experience/></div>
            <div className="flex__container__card"><Design/></div>      
        </div>
    )


}

export default Carousel;