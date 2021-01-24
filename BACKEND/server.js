import express from 'express';
import data from './data.js';

const app = express();

app.get("/api/products", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
})

app.listen(5000, () => console.log('sserver started'));