import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';


const Navbar = (props) => {
    return (
        <div className="Navbar">
            <div className="ui secondary pointing menu">
                <Link to="/" className="item" >
                    Home
                </Link>
                <Link to="/motherboard" className="item">
                    Motherboard
                </Link>
                <Link to="/memory" className="item">
                    Memory
                </Link>
                <Link to="/processor" className="item">
                    Processor
                </Link>
                <Link to="/graphics-card" className="item">
                    Graphics Card
                </Link>
                <Link to="/add" className="item">
                    Add Item
                </Link>
                <div className="right menu temp">
                    <Link to="/cart" className="item">
                        <i class="shopping cart large icon cartIcon" ></i>
                    </Link>
                    <div className="circle">{props.items.length}</div>
                    <a className="ui item">
                        Sign In
                    </a>
                    <a className="ui item">
                        Log In
                    </a>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log(state.cartItems);
    return {
        items: state.cartItems,
    }
}

export default connect(mapStateToProps)(Navbar);