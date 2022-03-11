import React from 'react';
import './contact.scss';


const contact = () => {
  return (
   <div className="contact__container">
      <form action="" method="post" className="contact__form__container">
        <div className="left">
          <div className="input__container">
            <input type="text" name="fName" id="firstName" placeholder="First Name" required/>
            <span></span>
          </div>
          <div className="input__container">
            <input type="text" name="lName" id="lastName" placeholder="Last Name" required/>
            <span></span>
          </div>
          <div className="input__container lg">
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <span></span>
          </div>
          <div className="input__container lg">
            <input type="number" name="pNumber" id="phoneNumber" placeholder="Phone Number (Optional)"/>
            <span></span>
          </div>
        </div>
        <div className="right">
          <textarea name="comments" id="comments" cols="30" rows="10" required></textarea>
        </div>
      </form>
    </div>
  );
}

export default contact;