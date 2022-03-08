import React from 'react'
import './card.scss';
import {images} from '../../constants';
import {IoIosTime} from 'react-icons/io';

const experience_card = () => {
  return (
    <div className="card__container">
       {/*} <div className="self__image__container">
         <img src={images.me} alt="Image of Me"/>
        </div>*/}
      
        <IoIosTime className='card__icon'/>
        <h4 className="card__header">Experienced</h4>
    </div>
  )
}

export default experience_card;