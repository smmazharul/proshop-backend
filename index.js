import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cors from 'cors'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
// const express = require(express)
const port = process.env.PORT || 5000;

connectDB() // connect to mongodb 

const app = express();

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cors());
app.get('/', (req,res) => {
    res.send("API is running ...");

})

app.use('/api/products', productRoutes);
app.use("/api/users", userRoutes);


app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})