import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import './navbar.styles.scss';

class NavbarPage extends Component {
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
              <a href="#home" className="md-nav__link md-ref">Home</a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="#events" className="md-nav__link md-ref">Events</a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="#our-work" className="md-nav__link md-ref">Our work</a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="#contact-us" className="md-nav__link md-ref">Contact us</a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light md-nav__si" to="#https://facebook.com">
                <MDBIcon fab icon="facebook" fa-3x />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light md-nav__si" to="https://instagram.com">
                <MDBIcon fab icon="instagram" fa-3x />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light md-nav__si" to="https://twitter.com">
                <MDBIcon fab icon="twitter" fa-3x />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;