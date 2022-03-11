import React, {useState,useEffect} from 'react';
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
      <div className="right">
        <div className="carousel__container">
          {skills.map((item,index) => (
              <div key={`item-${index}`} className="skill">
                <div className='circle'>
                  <div className="icon__circle"></div>
                  <h6 className='skill__name'>{item.skillname}</h6>

                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills