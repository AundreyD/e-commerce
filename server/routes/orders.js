import express from 'express';
import {Order} from '../models/order';

const router = express.Router();

router.get(`/`, async (req, res) => {
    const orderList = await Order.find()
    if(!orderList) {
        res.status(500).json({success: false})
    }
    res.send(orderList)
})

router.post(`/`, (req, res) => {
    const newOrder = req.body;
    res.send(newOrder)
})

export const ordersRoutes = router;