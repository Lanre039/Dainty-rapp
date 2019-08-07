import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const NavBar = () => (
    <div id="home" tabIndex={-1} className="topbar">
        <nav className="nav">
            <div className="nav__social-icons">
              <a className="nav__social-icons-01" href="https://facebook.com"><i className="fab fa-facebook fa-3x"></i></a>
              <a className="nav__social-icons-02" href="https://instagram.com"><i className="fab fa-instagram fa-3x"></i></a>
              <a className="nav__social-icons-03" href="https://twitter.com"><i className="fab fa-twitter fa-3x"></i></a>
            </div>
            <ul className="nav__list">
              <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
              <li className="nav__item"><Link to="/birthdays" className="nav__link">Birthdays</Link></li>
              <li className="nav__item"><Link to="/weddings" className="nav__link">Weddings</Link></li>
              <li className="nav__item"><Link to="/corporate" className="nav__link">Corporate</Link></li>
            </ul>
        </nav>
    </div>
);


export default NavBar;