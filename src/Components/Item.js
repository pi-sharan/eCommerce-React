import React from 'react';
import '../css/Item.css';
import AddSubItem from './AddSubItem.js';

const Item = (props) => {
    return (
        <div className="fullItem">
            <img src={props.src} alt="Not Available" />

            <div className="titleItem">
                {props.title}
            </div>

            <div className="priceAndButton">
                <div className="priceItem">
                    &#8377;{props.price}
                </div>
                <AddSubItem id={props.id} />
            </div>
            <div className="CartAndBuy">
                <div className="ui buttons">
                    <button className="ui button">Add to Cart</button>
                    <div className="or"></div>
                    <button className="ui positive button">Buy Now</button>
                </div>
            </div>
        </div>


    );
}

export default Item;