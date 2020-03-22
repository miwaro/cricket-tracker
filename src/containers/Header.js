import React, { Component } from 'react';
import Nav from '../components/NavBar/Nav';
import darts from '../img/darts2.png';

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div>
          <div className="Header-title-line-container">
            <div className="Header-title theme-color-1"> 
              {/* <span style={{paddingLeft: '30px'}}>Simple</span> */}
              <span>Simple</span>
              <img src={darts} alt="3 darts pointing downward"/>
              {/* <span style={{paddingLeft: '15px'}}>Cricket</span> */}
              <span>Cricket</span>
            </div>
          </div>
            <Nav />
        </div>  
      </div>
    );
  }
}

export default Header;