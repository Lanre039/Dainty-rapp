import React from 'react';

import './birthdays.styles.scss';


const BirthdayItem = props => (
    <div className="birthday__list">
        <div className="birthday__layout">
            <div className="birthday__img">
                <img src={require(`./gal-${props.section.img[0]}.jpeg`)} alt="birthday" className="birthday__img--one" />
                <img src={require(`./gal-${props.section.img[1]}.jpeg`)} alt="birthday" className="birthday__img--two" />
            </div>
            <div className="birthday__details">
                <h1 className="heading">{props.section.event}</h1>
                <h2 className='heading--2'>{props.section.location}</h2>
                <p className='heading--3'>{props.section.testimony}</p>
            </div>
        </div>
        
    </div>        
);

export default BirthdayItem;