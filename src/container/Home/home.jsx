import React from 'react'
import './home.scss'
import {Header} from '../../components';

const home = () => {
  return (
    <div className="container">
      <Header/>
      <h1>Make Your<br/>Ideas Come<br/>To Life</h1>
      <div className="home__work__popout"></div>
      <span className='home__topLeft__line'></span>
      <span className='home__bottomLeft__line'></span>
    </div>
  )
}

export default home