// import React from 'react';
// import { Link } from 'react-router-dom';

// import './navbar.styles.scss';

// const NavBar = () => (
//     <div id="home" tabIndex={-1} className="topbar">
//         <nav className="nav">
//             <div className="nav__social-icons">
//               <a className="nav__social-icons-01" href="https://facebook.com"><i className="fab fa-facebook fa-3x"></i></a>
//               <a className="nav__social-icons-02" href="https://instagram.com"><i className="fab fa-instagram fa-3x"></i></a>
//               <a className="nav__social-icons-03" href="https://twitter.com"><i className="fab fa-twitter fa-3x"></i></a>
//             </div>
//             <ul className="nav__list">
//               <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
//               <li className="nav__item"><Link to="/birthdays" className="nav__link">Birthdays</Link></li>
//               <li className="nav__item"><Link to="/weddings" className="nav__link">Weddings</Link></li>
//               <li className="nav__item"><Link to="/corporate" className="nav__link">Corporate</Link></li>
//             </ul>
//         </nav>
//     </div>
// );


// export default NavBar;

import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


import './navbar.styles.scss';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    
      <MDBNavbar color="default-color" dark expand="md" className="md-nav">
        <MDBNavbarBrand>
          <strong className="white-text md-nav__head">...Dainty<i>Events</i></strong>
          {/* <img src={require('./daintyevent.jpg')} alt="Wedding gallery" className="ourwork__img" />  */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} className="md-nav__toggle"/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            <MDBNavLink to="/" className="md-nav__link">Home</MDBNavLink>
              {/* <a href="#home" className="md-nav__link">Home</a> */}
            </MDBNavItem>
            <MDBNavItem>
              {/* <a href="#events" className="md-nav__link">Events</a> */}
              <MDBNavLink to="/birthdays" className="md-nav__link">Birthdays</MDBNavLink>
              {/* <MDBNavLink>
              <li className="nav__item"><Link to="/birthdays" className="nav__link">Birthdays</Link></li>
              </MDBNavLink> */}
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/weddings" className="md-nav__link">Weddings</MDBNavLink>
              {/* <a href="#our-work" className="md-nav__link">Our work</a> */}
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="/corporate" className="md-nav__link">Corporate</MDBNavLink>
              {/* <a href="#contact-us" className="md-nav__link">Contact us</a> */}
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light md-nav__si" to="#https://facebook.com">
                <MDBIcon fab icon="facebook" fa-3x />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light md-nav__si" to="https://instagram.com">
                {/* <MDBIcon fab icon="google-plus-g" /> */}
                <MDBIcon fab icon="instagram" fa-3x />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light md-nav__si" to="https://twitter.com">
                {/* <MDBIcon fab icon="google-plus-g" /> */}
                <MDBIcon fab icon="twitter" fa-3x />
              </MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    );
  }
}

export default Navbar;