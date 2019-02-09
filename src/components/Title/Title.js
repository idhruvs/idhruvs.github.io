import React, { Component } from 'react';
import Map from '../Map';
import './title.scss';

export default class Intro extends Component {

    render() {
        return (
            <div className="title-wrapper">
                <Map />
                <div className="title-desc">
                    <div className="title">
                        DHRUV SHAH
                    </div>
                    <div className="subtitle">Full Stack Developer | Machine Learning Enthusiast</div>
                </div>


            </div>

        );
    }
}