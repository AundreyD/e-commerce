import express from 'express';
import {Product} from '../models/product';

const router = express.Router();

router.get(`/`, async (req, res) => {
    const productList = await Product.find()
    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList)
})

router.get(`/:id`, async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id)
    if(!product) {
        res.status(500).json({success: false})
    }
    res.send(product)
})

router.post(`/`, (req, res) => {
    const newProduct = req.body;
    res.send(newProduct)
})

router.put(`/:id`, (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(404).send('Product not updated')
    }
})

router.delete()

export const productsRoutes = router;