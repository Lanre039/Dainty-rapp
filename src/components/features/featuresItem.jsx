import React from 'react';
import { Link } from 'react-router-dom';

import './features.scss';



const FeaturesItem = props => (
    <div className="features__home--list">
        <Link className='features__home--list-link' to={props.section.path}>
        <div className="features__home--list-01">
            <img src={require(`./gal-${props.section.img}.jpeg`)} alt="birthday" className="img" />
            <h1 className="heading">{props.section.title}</h1>
            <p>{props.section.content}</p>
        </div>
        </Link>
    </div>        
);




export default FeaturesItem;