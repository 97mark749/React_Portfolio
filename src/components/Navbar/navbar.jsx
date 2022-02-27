import React from 'react';
import './navbar.scss';
import {images} from '../../constants';
import {ImBubbles} from 'react-icons/im';
import {FaHome,FaSuitcase,FaToolbox} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs';

const navbar = () => {
  return (
    <div className="app__navbar__container">
      <img src={images.desk_devices} alt="Navbar Background" />
        <nav className='app__navbar'>
            <ul className='app__navbar__list'>
              {[['Home',<FaHome/>],['About',<IoIosContact/>],['Services',<FaSuitcase/>],['My Toolbox',<FaToolbox/>],['Featured Work', <BsFillFileEarmarkCodeFill/>]].map((item) => (

                  <li key={`link-${item[0]}`} className="app__navbar__item">
                    <a href={`#${item[0]}`} className="app__navbar__link">{item[0]}</a>
                    <div className="app__navbar__icon">{item[1]}</div>
                  </li>
              )
            )}
          </ul>
          <div className="contact__box">
            <ImBubbles className='contact__icon'/>
            <p className="contact__text">Say Hello</p>
          </div>
       </nav>
    </div>
    
  );
}

export default navbar;