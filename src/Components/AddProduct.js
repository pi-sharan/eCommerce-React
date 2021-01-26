import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/AddProduct.css';

const AddProduct = (props) => {
    const [Id, setId] = useState('');
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [Type, setType] = useState('');
    const [Desc, setDesc] = useState('');
    const [Img, setImg] = useState('');

    const saveToDB = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:5000/add-product", {}, {
            headers: {
                dbType: 'Product',
                id: Id,
                title: Title,
                price: Price,
                img: Img,
                type: Type,
            }
        });
        console.log(response);
    }


    return (
        <div className="mainContainer">
            <form class="ui form">
                <div class="field">
                    <label>ID</label>
                    <input type="text" name="ID" placeholder="ID" onChange={e => setId(e.target.value)} />
                </div>
                <div class="field">
                    <label>Product Name</label>
                    <input type="text" name="Product-Name" placeholder="Product Name" onChange={e => setTitle(e.target.value)} />
                </div>
                <div class="field">
                    <label>Product Description</label>
                    <input type="text" name="product-desc" placeholder="Product Description" onChange={e => setDesc(e.target.value)} />
                </div>
                <div class="field">
                    <label>Type</label>
                    <input type="text" name="type" placeholder="Motherboard, Processor, etc." onChange={e => setType(e.target.value)} />
                </div>
                <div class="field">
                    <label>Price</label>
                    <input type="text" name="price" placeholder="Price in Rupees" onChange={e => setPrice(e.target.value)} />
                </div>
                <div class="field">
                    <label>Image</label>
                    <input type="text" name="image" placeholder="Location of image" onChange={e => setImg(e.target.value)} />
                </div>

                <button class="ui button" type="submit" onClick={saveToDB}>Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;