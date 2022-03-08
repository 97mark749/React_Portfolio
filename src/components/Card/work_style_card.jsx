import React from 'react';
import {RiFlowChart} from 'react-icons/ri';

const work_style_card = () => {
  return (
    <div className="card__container">
        <RiFlowChart className='card__icon workStyle__icon'/>
        <h4 className="card__header">Work Style</h4>
        {/*<p className="card__body__text"></p>*/}
    </div>
  )
}

export default work_style_card