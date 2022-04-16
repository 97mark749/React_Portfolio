import React, {useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation  } from "swiper";
import {urlFor, client} from '../../client';
import './skills.scss';


const Skills = () => {
  

  // Below will populate the dat from the Sanity Server 
  const [skills, setSkills] = useState([]) // useStateSnippet
  useEffect(() => { // useEffectSnippet
    const query = `*[_type == "skills"]`;

    client.fetch(query)
      .then((data) => setSkills(data))
      .catch(console.error);

  }, [])
  

  return (
    <div className="skills__container" id="My Toolbox">
      <div className="left">
        <div className="skills__content">
          <div className="scroll__line">
            <h4>SCROLL</h4>
            <div className="line__ctr"><div className="line"></div></div>
          </div>
          <h2 className="header">My Toolbox</h2>
          <p>The Languages, Skills, And Techniques<br/>I Use To Bring Your Ideas To Life.</p>
        </div>
      </div>
      <div className="right">
        <div className="carousel__container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
          {skills.map((item,index) => (
              <SwiperSlide key={`${index}`} className="skill">
                <div className='circle'>
                  <div className="icon__circle"></div>
                  <h6 className='skill__name'>{item.skillname}</h6>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
          
        </div>
      </div>
    </div>
  )
}

export default Skills