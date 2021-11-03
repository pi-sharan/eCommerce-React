import React from 'react';

import '../css/Footer.css';
const Footer = () => {
    return (
        <div className="Footer">
            <img src="/images/shoplogo.jfif" />
            <div className="mainInfo">
                <div className="copyrightAndName">
                    <i class="copyright outline icon big"></i>
                    <span className="year">2021 - Sanyam Jha </span>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/ThePiyushSharan" target="_blank">
                        <i class="facebook f icon huge"></i>
                    </a>
                    <a href="https://github.com/pi-sharan" target="_blank">
                        <i class="github icon huge"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/piyush-sharan-16456645/" target="_blank">
                        <i class="linkedin icon huge"></i>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Footer;