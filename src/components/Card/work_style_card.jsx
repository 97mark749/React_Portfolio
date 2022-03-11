import React from 'react';
import {RiFlowChart} from 'react-icons/ri';
import {IoIosArrowDropdownCircle} from 'react-icons/io';

const work_style_card = () => {
  return (
    <div className="card__container">
        <RiFlowChart className='card__icon workStyle__icon'/>
        <h4 className="card__header workStyle__header">Organized</h4>
        {/*<p className="card__body__text"></p>*/}
        <div className="learn__more__container">
          <p>Learn More</p>
          <IoIosArrowDropdownCircle className='learn__more__toggle'/>
        </div>
    </div>
  )
}

export default work_style_card