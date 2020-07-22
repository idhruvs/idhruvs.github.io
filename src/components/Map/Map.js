import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import MapMarker from './MapMarker';
import MapPopup from './MapPopup';

const accessTokens = {
  mapbox:
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
  dhruv:
    'pk.eyJ1IjoiZGhydXZzIiwiYSI6ImNqaGtsc25pZDA0ZnozMG1udzZrZTQ5c2QifQ.a3C-KtYZdFFX-afXlh_kJQ',
};
const style = {
  dark: 'mapbox://styles/dhruvs/cj5rt7zpt335i2rqanhpocu63',
  mapbox: 'mapbox://styles/mapbox/ciy4thb4n00252suryzsojcgz',
};

const Mapbox = ReactMapboxGl({
  accessToken: accessTokens.mapbox,
  attributionControl: false,
  dragRotate: false,
  scrollZoom: false,
  touchZoomRotate: false,
});

const locations = [
  {
    id: 'loc1',
    position: [18.0686, 59.3293],
    isCurrentLocation: true,
    location: 'Stockholm, Sweden',
    description: 'Current Location',
  },
  {
    id: 'loc2',
    position: [72.1519, 21.7645],
    isCurrentLocation: false,
    location: 'Bhavnagar, India',
    description: 'Birth place',
  },
  {
    id: 'loc3',
    position: [73.8567, 18.5204],
    isCurrentLocation: false,
    location: 'Pune, India',
    description: 'Graduation',
  },
];

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.map = {};
    this.state = {
      center: [2.092969945132154, 40.4209136793379],
      zoom: [1.60662053785177],
      containerStyle: {
        flex: 1,
        height: 400,
      },
      selectedLocation: undefined,
    };
  }
  getMapCenter = () => {
    const selectedLocation = undefined;
    this.setState({ ...this.state, selectedLocation });
    console.log(this.map.getCenter());
    console.log(this.map.getZoom());
  };

  mapDidLoad = mapInstance => {
    this.map = mapInstance;
  };

  onMarkerClick = location => {
    const selectedLocation = location;
    this.setState({ ...this.state, selectedLocation });
  };

  render() {
    const { center, zoom, containerStyle, selectedLocation } = this.state;
    return (
      <Mapbox
        style={style.mapbox}
        center={center}
        zoom={zoom}
        containerStyle={containerStyle}
        onClick={this.getMapCenter}
        onStyleLoad={this.mapDidLoad}
      >
        {Object.keys(locations).map((location, index) => (
          <Marker
            key={locations[index].id}
            coordinates={locations[index].position}
            onClick={this.onMarkerClick.bind(this, locations[index])}
          >
            <MapMarker
              isCurrentLocation={locations[index].isCurrentLocation}
              key={`mapmarker-${locations[index].id}`}
            />
          </Marker>
        ))}
        {selectedLocation && (
          <Popup
            key={selectedLocation.id}
            coordinates={selectedLocation.position}
          >
            <MapPopup {...selectedLocation} />
          </Popup>
        )}
      </Mapbox>
    );
  }
}
