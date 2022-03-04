import React from 'react'
import './card.scss';
import {images} from '../../constants';

const intro_card = () => {
  return (
    <div className="card__container">
        <div className="self__image__container">
          <img src={images.me} alt="Image of Me"/>
        </div>
        <p className="card__body__text">I’m a FrontEnd Web Developer with a BS in Computer & Information Sciences. I take pride in creating applications that solve business problems and perform with a seamless user experience!</p>
    </div>
  )
}

export default intro_card;