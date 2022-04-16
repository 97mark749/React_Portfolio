import React,{useState,useEffect} from 'react';
import {urlFor, client} from '../../client';
import './ex_projects.scss';


const Ex_projects = () => {

  const [projects, setProjects] = useState([])
  useEffect(() => {
    const query = `*[_type == "sideprojects"]`;
    client.fetch(query)
      .then((data) => setProjects(data))
      .catch(console.error)
  }, [])


  return (
    <div className="other__projects__container" id="other_projects">
      <div className="content">
        <div className="subsection__heading">
            <h4 className = "sub__header" id="featured__work__header">MY OTHER WORKS</h4>
          <div className="divider__line"></div>
        </div>
        <div className="project__card__container">
        {projects.map((item,index) => (
            <div key={`item-${index}`}>
                <div className="project__content__container">
                  <div className="project__card">
                    <div className="project__images">{item.images.map((image,idx) =>(
                      <img src={image} alt="image" key={`img-${idx}`} />
                    ))}</div>
                  <div className="project__text">
                    <div className="project__heading">{item.title}</div>
                    <div className="project__desc">{item.description}</div>
                  </div>
                </div>

                </div>
            </div>
          ))}
            
        </div>
      </div>
  </div>
  );
}

export default Ex_projects;