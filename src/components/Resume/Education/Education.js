import React from 'react';
import graduation from '../../../assets/graduation.png';
import calender from '../../../assets/calender.png';
import './style.scss';

const Education = () => (
  <div>
    <div className="education-wrapper">
      <div className="education-title">M.Tech - Machine Learning</div>
      <div className="education-section">
        <div className="icon">
          <img className="skill-logo" src={graduation} alt="Graduation-Icon" />
        </div>
        <div className="content">DAIICT, Gandhinagar</div>
      </div>
      <div className="education-section">
        <div className="icon">
          <img
            style={{ width: '10px' }}
            className="skill-logo"
            src={calender}
            alt="Graduation-Icon"
          />
        </div>
        <div className="content">2014 - 2016</div>
      </div>
    </div>

    <div className="education-wrapper">
      <div className="education-title">
        B.Tech - Electronics and Telecommunication
      </div>
      <div className="education-section">
        <div className="icon">
          <img className="skill-logo" src={graduation} alt="Graduation-Icon" />
        </div>
        <div className="content">University of Pune, Pune</div>
      </div>
      <div className="education-section">
        <div className="icon">
          <img
            style={{ width: '10px' }}
            className="skill-logo"
            src={calender}
            alt="Graduation-Icon"
          />
        </div>
        <div className="content">2009 - 2013</div>
      </div>
    </div>
  </div>
);

export default Education;
