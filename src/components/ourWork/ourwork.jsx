import React from 'react';

import './ourwork.scss';




const Ourwork = () => (
    <section id="our-work" tabIndex={-1} className="our-work">
        <h1 className="heading-large">Our work speaks for us</h1>
        <div className="our-work__layout">
          <figure className="our-work__item our-work__item--1">
            <img src={require('./gal-1.jpeg')} alt="Wedding gallery" className="our-work__img" /> 
          </figure>
          <figure className="our-work__item our-work__item--2">
            <img src={require('./gal-2.jpeg')} alt="Naming ceremony" className="our-work__img" /> 
          </figure>
          <figure className="our-work__item our-work__item--3">
            <img src={require('./gal-3.jpeg')} alt="Our costumes" className="our-work__img" /> 
          </figure>
          <figure className="our-work__item our-work__item--4">
            <img src={require('./gal-4.jpeg')} alt="Bridal wears" className="our-work__img" /> 
          </figure>
          <figure className="our-work__item our-work__item--5">
            <img src={require('./gal-5.jpeg')} alt="French outfit" className="our-work__img" /> 
          </figure>
          <figure className="our-work__item our-work__item--6">
            <img src={require('./gal-9.jpeg')} alt="Native outfit" className="our-work__img" /> 
          </figure>
          <figure className="our-work__item our-work__item--7">
            <img src={require('./gal-8.jpeg')} alt="Corporate" className="our-work__img" /> 
          </figure>
        </div>
    </section>
)

    
export default Ourwork;