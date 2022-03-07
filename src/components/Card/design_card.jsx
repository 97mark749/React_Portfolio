import React from 'react';
import {SiAdobeindesign} from 'react-icons/si';

const design_card = () => {
  return (
    <div className="card__container">
        {/*<p className="card__body__text"></p>*/}
      <SiAdobeindesign className='card__icon design__icon'/>
    </div>
  )
}

export default design_card