import React, { Component } from 'react';
import Nav from '../components/NavBar/Nav';

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div>
          <div className="Header-title-line-container">
            <div className="Header-title theme-color-1">
              Bar Darts
            </div>
          </div>
            <Nav />
        </div>  
      </div>
    );
  }
}

export default Header;