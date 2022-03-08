import React from 'react';
import {SiAdobeindesign} from 'react-icons/si';
import {IoIosArrowDropdownCircle} from 'react-icons/io';

const design_card = () => {
  return (
    <div className="card__container">
        {/*<p className="card__body__text"></p>*/}
      <SiAdobeindesign className='card__icon design__icon'/>
      <h4 className="card__header design__header">UX Oriented</h4>
      <div className="learn__more__container">
          <p>Learn More</p>
          <IoIosArrowDropdownCircle className='learn__more__toggle'/>
        </div>
    </div>
  )
}

export default design_card