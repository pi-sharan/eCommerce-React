import React from 'react';
import Item from './Item';
import '../css/Motherboard.css';

const Motherboard = () => {
    return (
        <div className="ItemContainer">
            <div className="ItemGrid">
                <Item id="1" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="2" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="3" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="4" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="5" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="6" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="7" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
                <Item id="8" title="ASUS ROG STRIX Z490-E GAMING INTEL MOTHERBOARD" price="28,499" src="/images/Motherboard/img1.jpg"></Item>
            </div>
        </div>
    );
}

export default Motherboard;