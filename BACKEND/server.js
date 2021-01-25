import express from 'express';
import mongoose from 'mongoose';
import data from './products.js';

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open !!");
    })
    .catch(err => {
        console.log(err);
    })

//MAKING THE PRODUCTS DATABASE
const prodSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: String,
    img: String,
    type: String,
});



const Product = mongoose.model('Product', prodSchema);
Product.remove({}, function (err) {
    console.log('collection removed')
});

for (let prod of data) {
    const currProd = new Product({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        img: prod.img,
        type: prod.type
    });

    currProd.save();
}

//PRODUCT DATABASE DONE

//MAKING THE USER LOGIN DATABASE


const app = express();

app.get("/api/products", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
})

app.listen(5000, () => console.log('Server started'));