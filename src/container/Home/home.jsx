import React from 'react'
import './home.scss'
import {Header} from '../../components';

const home = () => {
  return (
    <div className="container">
      <Header/>
      <h1>Make Your<br/>Ideas Come<br/>To Life</h1>
      <p className='home__description'>I’m an Independent Front-End Developer With<br/>an eye for creativity and professionalism</p>
      <div className="home__work__popout">
        <div><span>0</span><span>0</span><span>0</span><span>0</span></div>
        <p>MY<br/>WORK</p>
      </div>
      <div className='home__topLeft__line'></div>
      <div className='year__est'>2021<br/><span>Since</span></div>
      <div className='home__bottomLeft__line'></div>
      <div className="scroll__txt">SCROLL</div>
      <div className="home__right__line"></div>
    </div>
  )
}

export default home