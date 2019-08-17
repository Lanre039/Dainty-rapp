import React from 'react';

import './weddings.styles.scss';


const WeddingsItem = props => (
    <div className="weddings__list">
        <div className="weddings__layout">
            <div className="weddings__img">
                <img src={require(`./gal-${props.section.img[0]}.jpeg`)} alt="wedding" className="weddings__img--one" />
                <img src={require(`./gal-${props.section.img[1]}.jpeg`)} alt="wedding" className="weddings__img--two" />
            </div>
            <div className="weddings__details">
                <h1 className="heading">{props.section.event}</h1>
                <h2 className='heading--2'>{props.section.location}</h2>
                <p className='heading--3'>{props.section.testimony}</p>
            </div>
        </div>
        
    </div>        
);

export default WeddingsItem;