import React from 'react';

import './topbar.scss';
import './css/all.css';

const Topbar = () => (
    <div id="home" tabIndex={-1} className="topbar">
        <div className="nav">
            <div className="nav__social-icons">
              <a className="nav__social-icons-01" href="https://facebook.com"><i className="fab fa-facebook fa-3x"></i></a>
              <a className="nav__social-icons-02" href="https://instagram.com"><i className="fab fa-instagram fa-3x"></i></a>
              <a className="nav__social-icons-03" href="https://twitter.com"><i className="fab fa-twitter fa-3x"></i></a>
            </div>
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#events" className="nav__link">Events</a></li>
              <li className="nav__item"><a href="#our-work" className="nav__link">Our work</a></li>
              <li className="nav__item"><a href="#contact-us" className="nav__link">Contact us</a></li>
            </ul>
        </div>
    </div>
);


export default Topbar;