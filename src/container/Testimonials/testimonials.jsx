import React,{useState,useEffect} from 'react';
import {urlFor, client} from '../../client';
import './testimonials.scss';
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri';


const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    const query = `*[_type == "testimonials"]`
    client.fetch(query)
    .then((data) => setTestimonials(data))
    .catch(console.error)

  }, [])
  

  return (
    <div className="testimonial__container">
      <div className="subsection__heading">
          <h4 className = "sub__header" id="testimonials__header">TESTIMONIALS</h4>
          <div className="divider__line"></div>
      </div>
      <div className="testimonials__container">
        {testimonials.map((item,index) => (
          <div key = {`key-${index}`} className="testimonial">
            <div className="company__image"><img src={urlFor(item.imageurl)} alt="Repco Inc Company Logo" /></div>
            <div className="text">
              <p><RiDoubleQuotesL className='quote__icon left'/>{item.feedback}<RiDoubleQuotesR className='quote__icon right'/></p>
              <div className="company__info">
                <div className='persons__name'>{item.name.toUpperCase()}</div>
                <div className='company__name'>{item.company} ~ {item.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;