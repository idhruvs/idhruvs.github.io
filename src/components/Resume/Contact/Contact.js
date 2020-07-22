import React from 'react';
import phone from '../../../assets/phone.png';
import email from '../../../assets/email.png';
import github from '../../../assets/github.png';
import location from '../../../assets/location.png';
import './style.scss';

const Contact = () => (
  <div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={phone} alt="Phone" />
      </div>
      <div className="content">+46 720176668</div>
    </div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={email} alt="Email" />
      </div>
      <div className="content">
        <a href="mailto:dhruv.shah4192@gmail.com">dhruv.shah4192@gmail.com</a>
      </div>
    </div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={github} alt="Github" />
      </div>
      <div className="content">
        <a href="https://github.com/idhruvs">https://github.com/idhruvs</a>
      </div>
    </div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={location} alt="Phone" />
      </div>
      <div className="content">Stockholm, Sweden</div>
    </div>
  </div>
);

export default Contact;
