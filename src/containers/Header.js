import React, { Component } from 'react';

import Nav from '../components/NavBar/Nav';
import dartImg from '../img/darts2.png';
import classes from './imageStyles.module.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div>
          <div className="Header-title-line-container">
            <div className="Header-title theme-color-1">
              <span className={classes.simple}>Simple</span>
              <img className={classes.darts} src={dartImg} alt="3 darts pointing downward" />
              <span className={classes.cricket}>Cricket</span>
            </div>
          </div>
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;