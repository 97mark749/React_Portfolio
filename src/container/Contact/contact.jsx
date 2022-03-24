import React, {useRef} from 'react';
import './contact.scss';



const Contact = () => {
  // extract form information

    const fName = useRef(null)
    const lName = useRef(null)
    const eml = useRef(null)
    const pNumber = useRef(null)
    const cmts = useRef(null)
/*
    const handleSubmit = () => {

      const data = {
        firstName: fName.current.value,
        lastName: lName.current.value,
        email: eml.current.value,
        phoneNumbe: pNumber.current.value,
        comments: cmts.current.value
      }
      alert("tadaaa!: \n" + JSON.stringify(data) + "Your data");
      return false;
    }

  */
  return (
   <div className="contact__container">
      <form id="contact_form" className="contact__form__container">
        <div className="contact__banner">
          <h4 className="sub__header">Send Me A Message</h4>
          <p>Have A Question Or Proposal, Don’t Hesitate To Contact Me.</p>
        </div>
        <div className="left">
          <div className='input__boxes'>
            <div className="name">
              <div className="input__container">
                <input type="text" name="fName" id="firstName" placeholder="First Name" tabIndex="0" ref = {fName} required/>
                <span></span>
              </div>
              <div className="input__container">
                <input type="text" name="lName" id="lastName" placeholder="Last Name" tabIndex="1" ref = {lName} required/>
                <span></span>
              </div>
            </div>
            <div className="input__container lg">
              <input type="email" name="email" id="email" placeholder="Email" tabIndex="2" ref = {eml} required/>
              <span></span>
            </div>
            <div className="input__container lg">
              <input type="tel" name="pNumber" id="phoneNumber" placeholder="Phone Number (Optional)" ref = {pNumber} tabIndex="3"/>
              <span></span>
            </div>
          </div>
          <div className="form__buttons">
            <input type="button" value="RESET" className='btn'/>
            <input type="submit" value="SUBMIT" className='btn' tabIndex="5"/>
          </div>
        </div>
        <div className="right">
          <textarea name="comments" id="comments" cols="30" rows="10" placeholder= "Write A Brief Message..." tabIndex="4" ref = {cmts} required/>
        </div>
      </form>
    </div>
  );
}

export default Contact;