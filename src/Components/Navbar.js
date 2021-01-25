import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
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
                <div className="right menu temp">
                    <Link to="/cart" className="item">
                        <i class="shopping cart large icon cartIcon" ></i>
                    </Link>
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

export default Navbar;