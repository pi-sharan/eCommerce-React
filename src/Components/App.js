import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar.js';
import Motherboard from './Motherboard';
import Memory from './Memory';
import GraphicsCard from './GraphicsCard';
import Processor from './Processor';
import Home from './Home';
import Cart from './Cart';
import AddProduct from './AddProduct';

const App = () => {
    return (<div>
        <BrowserRouter>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/motherboard" exact component={Motherboard} />
            <Route path="/memory" exact component={Memory} />
            <Route path="/graphics-card" exact component={GraphicsCard} />
            <Route path="/processor" exact component={Processor} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/add" exact component={AddProduct} />
        </BrowserRouter>

    </div>
    );
}

export default App;