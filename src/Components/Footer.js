import React from 'react';

import '../css/Footer.css';
const Footer = () => {
    return (
        <div className="Footer">
            <img src="/images/shoplogo.jfif" />
            {/* <i class="envelope icon"></i>
            <i class="facebook icon"></i>
            <i class="facebook f icon"></i>
            <i class="github icon"></i>
            <i class="instagram icon"></i>
            <i class="linkedin icon"></i> */}
            <div className="mainInfo">
                <div className="copyrightAndName">
                    <i class="copyright outline icon big"></i>
                    <span className="year">2021 - </span>
                    <img src="/images/myname.png" />
                </div>
                <div className="icons">
                    {/* <i class="envelope icon huge"></i> */}
                    {/* <i class="facebook icon"></i> */}
                    <i class="facebook f icon huge"></i>
                    <i class="github icon huge"></i>
                    {/* <i class="instagram icon huge"></i> */}
                    <i class="linkedin icon huge"></i>
                </div>
            </div>

        </div>
    );
}

export default Footer;