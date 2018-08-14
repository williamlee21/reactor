import React, { Component } from 'react';
import Banner from './Banner'
import WhatWeDo from './WhatWeDo'
import DisplayOne from './DisplayOne'
import DisplayTwo from './DisplayTwo'
import Subscribe from './Subscribe'
import Footer from './Footer'


class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <WhatWeDo/>
        <DisplayOne/>
        <DisplayTwo/>
        <Subscribe/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;