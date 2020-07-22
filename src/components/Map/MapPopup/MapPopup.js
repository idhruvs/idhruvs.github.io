import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MapPopup = props => {
  console.log(props);
  const { description, location } = props;
  return (
    <div className="popup-wrapper">
      <div className="desc-text-wrapper">
        <div className="desc-text-label">Location: </div>
        <div className="desc-text"> {location}</div>
      </div>
      <div className="desc-text-wrapper">
        <div className="desc-text-label">Description:</div>
        <div className="desc-text">{description}</div>
      </div>
    </div>
  );
};

MapPopup.propTypes = {
  location: PropTypes.string,
  description: PropTypes.string,
};
export default MapPopup;
