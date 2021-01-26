import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import '../css/CartItem.css';
import { fetchById } from '../action';

const CartItem = (props) => {




    return (
        <div className="cartItem">
            <div className="itemImage">
                <img src={props.obj.img} />
            </div>
            <div className="itemInfo">
                <div className="itemTitle">
                    {props.obj.title}
                </div>
                <div className="Price">
                    {props.obj.price}
                </div>
                <div>
                    {props.obj.quantity}
                </div>
                <div>
                    Total = {(parseInt(props.obj.price.replace(/,/g, '')) * props.obj.quantity).toLocaleString()}
                </div>
            </div>

        </div>

    );
}

const mapStateToProps = state => {
    return {
        itemById: state.itemById,
    };
}

export default connect(mapStateToProps, { fetchById })(CartItem);