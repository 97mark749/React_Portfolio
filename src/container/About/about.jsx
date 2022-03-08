import React from 'react';
import './about.scss';
import {Carousel} from '../../components';


const about = () => {
  
  return (
    <div className="about__container">
      <h2 className="header">Hi, my name is Mark Kirby . . .</h2>
      <p className="about__text">I’m a FrontEnd Web Developer with a BS in Computer & Information Sciences. I take pride in creating applications that solve business problems and perform with a seamless user experience!</p>
      <div className="info__container">
        <Carousel/>
      </div>
    </div>
  );
}

export default about;