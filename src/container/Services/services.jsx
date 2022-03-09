import React from 'react';
import './services.scss';
import {Phone} from '../../components';
import {BsFillCheckCircleFill} from 'react-icons/bs';


const services = () => {
  const services = ['SEO Optimization','Expectional UX/UI Design','Client Tailored Website Design','Interactive User Interfaces','A Simple Yet Modern Approach','Mobile First Responsiveness','User Engagement'];
  return (
    <div className="services__container">
        <div className="left">
          <h2 className='header'>Services &<br/>Expectations</h2>
          <ul className='services__list'>
            {services.map((item) => (
              <div key={`item-${item}`} className="list__item"><BsFillCheckCircleFill className='check_mark'/><li>{item}</li></div>
            ))}
          </ul>
        </div>
        <div className="right"><div className="phone__img"><Phone/></div></div>
    </div>
  );
}

export default services;