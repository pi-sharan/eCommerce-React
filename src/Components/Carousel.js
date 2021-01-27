import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import '../css/MyCarousel.css';

const MyCarousel = () => {

    return (
        <div className="myCarousel">
            <Carousel autoPlay interval={4000}
                infiniteLoop={true}>
                <div>
                    <img src="/images/Carousel/img1.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="/images/Carousel/img2.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="/images/Carousel/img3.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>

    );

}

export default MyCarousel;