import React from 'react';
import './footer.scss';
import {Header} from '../../components';
import {TiSocialLinkedin,TiSocialYoutube} from 'react-icons/ti';
import {BsGithub} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';


const footer = () => {
  return (
    <div className="footer__container">
      <div className="left">
        <Header className="footer__header"/>
        <p>Fulfilling Your Every Business<br/>Need One Line of Code At A Time!</p>
      </div>
      <div className="right">
        <div className="footer__contact__container">
          <h4 className="get__in__touch">GET IN TOUCH</h4>
          <div className="email">info@markmkirby.com</div>
          <div className="phone__number">(856)360-6710</div>
        </div>
        <div className="social__media__icons">
          <div className="icon" id="ln"><TiSocialLinkedin className='logo'/></div>
          <div className="icon" id="gh"><BsGithub className='logo'/></div>
          <div className="icon" id="yt"><TiSocialYoutube className='logo'/></div>
          <div className="icon" id="ig"><AiFillInstagram className='logo'/></div>
        </div>
      </div>
    </div>
  );
}

export default footer;