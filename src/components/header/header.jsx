import React from 'react';

import './header.scss';


const Header = () => (
    <div className="header">
        <div className="header__text">
          <h1>
            <a href="index.html" className="header__format">Dainty Events</a>
          </h1>
        </div>
        <img name="slide"  alt="" className="slide" />
        <div className="header__details">
          <h1 className="header__details--01">Give Your Events a Professional Touch</h1>
          <h2 className="header__details--02">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </h2>
        </div>
      </div>
);


export default Header;