import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'

const MapMarker = (props) => {
  const { isCurrentLocation } = props;
  return (
    <div className={(isCurrentLocation ? 'current-location-marker' : 'map-marker')}></div>
  );
};

MapMarker.propTypes = {
  isCurrentLocation: PropTypes.bool
};
export default MapMarker;