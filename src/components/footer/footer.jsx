import React from 'react';

import './footer.scss';

const Footer = props => (
    <div className="footer">
        <p className="copyright">
            &copy; Copyright 2019 Dainty Events. All Right Reserved.
            Designed By @{props.email}
        </p>
    </div>
);


export default Footer;