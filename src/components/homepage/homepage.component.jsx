import React from 'react';

import Header from '../header/header';
import Features from '../features/features';
import Ourwork from '../ourWork/ourwork';
import ContactUs from '../contactUS/contactUs';
import Topbar from '../topbar/topbar';
import NavbarPage from '../navbar/Navigation';


const HomePage = () => (
    <div>
        {/* <Topbar/> */}
        <NavbarPage/>
        <Header animDuration={1}/>
        <Features/>
        <Ourwork/>
        <ContactUs/>
    </div>
);

export default HomePage;