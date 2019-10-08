import React from 'react';

import './footer.scss';

const Footer = props => (
    <div className="footer">
        <div className="copyright">
            <p>
                &copy; Copyright {new Date().getFullYear()}, Dainty Events. All Right Reserved.
                Designed By @{props.email}
            </p>
        </div>
        
    </div>
);


export default Footer;