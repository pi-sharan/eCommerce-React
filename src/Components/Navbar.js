import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="ui secondary pointing menu">
                <Link to="/" class="item" >
                    Home
                </Link>
                <Link to="/motherboard" class="item">
                    Motherboard
                </Link>
                <Link to="/memory" class="item">
                    Memory
                </Link>
                <Link to="/processor" class="item">
                    Processor
                </Link>
                <Link to="/graphics-card" class="item">
                    Graphics Card
                </Link>
                <div class="right menu">
                    <a class="ui item">
                        Sign In
                    </a>
                    <a class="ui item">
                        Log In
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;