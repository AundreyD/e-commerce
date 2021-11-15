import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import {productsRoutes} from './routes/products';
import {categoriesRoutes} from './routes/categories';
import {usersRoutes} from './routes/users';
import {ordersRoutes} from './routes/orders';


// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');



require('dotenv/config');

const app = express();

//ENV Variables
const api = process.env.API_URL;

//Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors())
app.options('*' ,cors());
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)



app.get('/', (req, res) => {
    res.send('hello world')
})

mongoose.connect(process.env.MONGO_DB_STRING).then(()=> {
    console.log('db conection ready')
}).catch((err) => {
    console.log(err)
})

app.listen(3000, ()=> {
    console.log(api);
    console.log('server started')
});