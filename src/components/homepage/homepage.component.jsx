import React from 'react';

import Header from '../header/header';
import Features from '../features/features';
import Ourwork from '../ourWork/ourwork';
import ContactUs from '../contactUS/contactUs';
import Topbar from '../topbar/topbar';


const HomePage = () => (
    <div>
        <Topbar/>
        <Header animDuration={1}/>
        <Features/>
        <Ourwork/>
        <ContactUs/>
    </div>
);

export default HomePage;