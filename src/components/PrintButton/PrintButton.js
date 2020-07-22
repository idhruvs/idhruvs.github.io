import React from 'react';
import './style.scss';
import resume from '../../assets/DhruvShah_Resume.pdf';

const PrintButton = ({ id, label }) => (
  <div className="">
    <div id="myMm" style={{ height: '1mm' }} />

    <a href={resume} target="_blank" className="floating-button">
      {label}
    </a>
  </div>
);

export default PrintButton;
