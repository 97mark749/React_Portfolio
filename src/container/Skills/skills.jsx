import React from 'react';
import './skills.scss';


const skills = () => {
  return (
    <div className="skills__container">
      <div className="left">
        <div className="skills__content">
          <div className="scroll__line">
            <h4>SCROLL</h4>
            <div className="line"></div>
          </div>
          <h2 className="header">My Toolbox</h2>
          <p>The Languages, Skills, And Techniques<br/>I Use To Bring Your Ideas To Life.</p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default skills