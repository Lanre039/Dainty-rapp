import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';


class Header extends React.Component {
	constructor(props) {
  	super(props)
    this.backgrounds = [require('./events.jpg'), require('./events-1.jpg'), require('./events-3.jpg')]
    this.state = { backgroundIndex: 0 }
    
    this.changeBackground = this.changeBackground.bind(this)
  }

  componentDidMount () {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    )
  }
  
  componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  }

  changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.props.animDuration * 3000
      )
    })
  }

  render () {
    return (
      <div className="header">
            <div className="header__text">
                <div className="header__details">
                <h1>
                    <Link to="/" className="header__format">Dainty Events</Link>
                </h1>
                <h1 className="header__details--01">Give Your Events a Professional Touch</h1>
                <h2 className="header__details--02">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h2>
            </div>
            </div>
            <img src={ this.backgrounds[this.state.backgroundIndex] } alt="slide" className="slide" />
        </div>
    )
  }
}

export default Header;