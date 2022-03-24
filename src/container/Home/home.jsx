import React from 'react'
import './home.scss'
import '../../scripts';
import {Header} from '../../components';
import {images} from '../../constants';
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {MdStarBorderPurple500} from 'react-icons/md';
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5';

const home = () => {
  
  


  return (
    <div className="container">
      <Header/>
      <h1>Make Your<br/>Ideas Come<br/>To Life</h1>
      <p className='home__description'>I’m an Independent Front-End Developer with<br/>an eye for creativity and professionalism</p>
      <div className="home__work__popout">
        <div><span><MdStarBorderPurple500 className='popout__icon'/></span><span><IoChatbubbleEllipsesOutline className='popout__icon'/></span><span>0</span><span>0</span></div>
        <p>MY WORK</p>
      </div>
      <div className='home__topLeft__line'><div className="line one"></div></div>
      <div className='year__est'>2021<br/><span>Since</span></div>
      <div className="image__ctr">
        <img src={images.blur_keyboard} alt="blurred keyboard"/>
        <h2 className="byb__title">Build<br/>Your<br/>Brand</h2>
        <div className="core__mission__ctr" id="core_mission_container">
          <p className="byb__txt">MY CORE<br/>MISSION</p>
          <div id="bybIcon"><IoIosArrowDropdownCircle className='byb__icon'/></div>
        </div>
        </div>
      <div className='home__bottomLeft__line'><div className="line two"></div></div>
      <div className="scroll__txt">SCROLL</div>
      <div className="home__right__line"><div className="line three"></div></div>
    </div>
  )
}

export default home