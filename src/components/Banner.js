import React, { Component } from 'react';
import banner from '../assets/banner.png';

class Banner extends Component {

    render() {
        return (
            <div>
                <img src={banner} alt="banner" height="500px" width="100%"/>
                <div className="centered">
                    <h1>Hello, Welcome to Reactor</h1>
                </div>
        </div>
        );
    }
}

export default Banner;