import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MapMarker from './MapMarker';

const accessTokens = {
    mapbox: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA', dhruv: 'pk.eyJ1IjoiZGhydXZzIiwiYSI6ImNqaGtsc25pZDA0ZnozMG1udzZrZTQ5c2QifQ.a3C-KtYZdFFX-afXlh_kJQ'
};
const style = { dark: 'mapbox://styles/dhruvs/cj5rt7zpt335i2rqanhpocu63', mapbox: 'mapbox://styles/mapbox/ciy4thb4n00252suryzsojcgz' };

const Mapbox = ReactMapboxGl({
    accessToken: accessTokens.mapbox,
    attributionControl: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoomRotate: false
});

const locations = [
    { id: 'loc1', position: [18.0686, 59.3293] }
]

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.map = {};
        this.state = {
            center: [46.335685871710666, 48.339172448966565],
            zoom: [1.2286151552661149],
            containerStyle: {
                flex: 1,
                height: 400
            },
        };

    }
    getMapCenter = () => {
        // console.log(this.map.getCenter());
        // console.log(this.map.getZoom());
    }

    mapDidLoad = (mapInstance) => {
        this.map = mapInstance;
    }

    render() {
        const { center, zoom, containerStyle } = this.state;
        return (
            <Mapbox
                style={style.mapbox}
                center={center}
                zoom={zoom}
                containerStyle={containerStyle}
                onClick={this.getMapCenter}
                onStyleLoad={this.mapDidLoad}
            >
                <Marker coordinates={locations[0].position}>
                    <MapMarker />
                </Marker>
            </Mapbox>
        );
    }
}
