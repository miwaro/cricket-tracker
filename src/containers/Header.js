import React, { Component } from 'react';
import Nav from '../components/NavBar/Nav';
import dartImg from '../img/darts2.png';

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div>
          <div className="Header-title-line-container">
            <div className="Header-title theme-color-1"> 
              <span style={{fontStyle: 'italic'}}>Simple</span>
              <img src={dartImg} alt="3 darts pointing downward"/>
              <span style={{fontStyle: 'italic'}}>Cricket</span>
            </div>
          </div>
            <Nav />
        </div>  
      </div>
    );
  }
}

export default Header;