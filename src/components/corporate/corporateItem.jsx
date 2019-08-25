import React from 'react';

import './corporate.styles.scss';


const CorporateItem = props => (
    <div className="corporate__list">
        <div className="corporate__layout">
            <div className="corporate__img">
                <img src={require(`./gal-${props.section.img[0]}.jpeg`)} alt="corporate" className="corporate__img--one" />
            </div>
            <div className="corporate__details">
                <h1 className="heading--1">{props.section.event}</h1>
                <h2 className='heading--2'>{props.section.location}</h2>
                <p className='heading--3'>{props.section.testimony}</p>
            </div>
        </div>
        
    </div>        
);

export default CorporateItem;