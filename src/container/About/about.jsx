import React from 'react';
import './about.scss';
import {Intro,Hobbies,WorkStyle} from '../../components';


const about = () => {
  
  return (
    <div className="about__container">
      <h2 className="header">Hi, my name is Mark Kirby . . .</h2>
      <Intro/>
    </div>
  );
}

export default about;