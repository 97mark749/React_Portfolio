import React,{useState,useEffect} from 'react';
import {urlFor, client} from '../../client';
import './works.scss';
import {images} from '../../constants';
import {Devices} from '../../components';


const Works = () => {

const [works, setWorks] = useState([])
useEffect(() => {
  const query = `*[_type == "works"]`;
  client.fetch(query)
    .then((data) => setWorks(data))
    .catch(console.error)
}, [])


  return (
    <div className="works__container" id="Featured Work">
      <div className="top__section">
        <div className="works__nav__desc">
          <div className="image"><Devices/></div>
          <div className="content">
            <h2 className="header">What I Have<br/>Done In The Past</h2>
            <div className="divider__line"></div>
            <div className="bottom__content">
              <p>Feel free to explore some of my latest work and side projects. Source code is available for my templates and images that you see on this website. Github links are also provided.</p>
              <div className="buttons__container">
                <a type="button" className='btn' href="#featured__work__header">MY WORK</a>
                <a type="button" className='btn' href="#testimonials__header">TESTIMONIALS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__section">
        <div className="subsection__heading">
          <h4 className = "sub__header" id="featured__work__header">FEATURED WORK</h4>
          <div className="divider__line"></div>
        </div>
        <div className="featured__Work__container">
          {works.map((item,index) => (
            <div key={`item-${index}`}>
              <div className = "works__card"></div>
              <div className="works__card__container">

                <h5 className="works__name">{item.companyname.toUpperCase()}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Works;