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
                <AddSubItem />
            </div>
            <div className="CartAndBuy">
                <div class="ui buttons">
                    <button class="ui button">Add to Cart</button>
                    <div class="or"></div>
                    <button class="ui positive button">Buy Now</button>
                </div>
            </div>
        </div>


    );
}

export default Item;