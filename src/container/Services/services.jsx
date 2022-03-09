import React from 'react';
import './services.scss';
import {Phone} from '../../components';


const services = () => {
  return (
    <div className="services__container">
        <div className="left"></div>
        <div className="right"><Phone/></div>
    </div>
  );
}

export default services;