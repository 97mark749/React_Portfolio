import React from 'react';
import './contact.scss';


const contact = () => {
  return (
   <div className="contact__container">
      <form action="" method="post" className="contact__form__container">
        <div className="contact__banner">
          <h4 className="sub__header">Send Me A Message</h4>
          <p>Have A Question Or Proposal, Don’t Hesitate To Contact Me.</p>
        </div>
        <div className="left">
          <div className='input__boxes'>
            <div className="name">
              <div className="input__container">
                <input type="text" name="fName" id="firstName" placeholder="First Name" tabIndex={0} required/>
                <span></span>
              </div>
              <div className="input__container">
                <input type="text" name="lName" id="lastName" placeholder="Last Name" tabIndex={1} required/>
                <span></span>
              </div>
            </div>
            <div className="input__container lg">
              <input type="email" name="email" id="email" placeholder="Email" tabIndex={2} required/>
              <span></span>
            </div>
            <div className="input__container lg">
              <input type="tel" name="pNumber" id="phoneNumber" placeholder="Phone Number (Optional)" tabIndex={3}/>
              <span></span>
            </div>
          </div>
          <div className="form__buttons">
            <input type="button" value="RESET" className='btn'/>
            <input type="button" value="SUBMIT" className='btn' tabIndex={4}/>
          </div>
        </div>
        <div className="right">
          <textarea name="comments" id="comments" cols="30" rows="10" placeholder= "Write A Brief Message..." required/>
        </div>
      </form>
    </div>
  );
}

export default contact;