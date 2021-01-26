import React from 'react';
import { connect } from 'react-redux';

import '../css/Item.css';
import AddSubItem from './AddSubItem.js';
import { makeZero, addItemToCart } from '../action';

const Item = (props) => {

    const addToCart = async (id) => {
        await props.makeZero(id);
        await props.addItemToCart(id, props.items[id]);
    }

    // console.log(props.cartItems);

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
                    <button className="ui button" onClick={() => addToCart(props.id)}>Add to Cart</button>
                    <div className="or"></div>
                    <button className="ui positive button">Buy Now</button>
                </div>
            </div>
        </div>


    );
}

const mapStateToProps = state => {
    return {
        items: state.items,
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps, { makeZero, addItemToCart })(Item);