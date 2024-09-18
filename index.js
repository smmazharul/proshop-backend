import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cors from 'cors'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
// const express = require(express)
const port = process.env.PORT || 5000;

connectDB() // connect to mongodb 

const app = express();


app.use(cors());
app.get('/', (req,res) => {
    res.send("API is running ...");

})

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((product) => product._id === req.params.id);
//     console.log(product)
//     res.json(product)
// })



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})