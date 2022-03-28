import React from 'react';
import './services.scss';
import {Phone} from '../../components';
import {BsCheck} from 'react-icons/bs';


const services = () => {
  const services = ['SEO Optimization','Expectional UX/UI Design','Client Tailored Website Design','Interactive User Interfaces','A Simple Yet Modern Approach','Mobile First Responsiveness','User Engagement'];
  return (
    <div className="services__container" id="Services">
        <div className="left">
          <div className="services__content__container">
            <h2 className='header'>Services &<br/>Expectations</h2>
            <ul className='services__list'>
              {services.map((item) => (
                <div key={`item-${item}`} className="list__item"><div className='check__mark__circle'><BsCheck className='check'/></div><li>{item}</li></div>
              ))}
            </ul>
          </div>
        </div>
        <div className="right"><div className="phone__img"><Phone/></div></div>
    </div>
  );
}

export default services;