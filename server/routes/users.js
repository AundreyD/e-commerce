import express from 'express';
import {User} from '../models/user';

const router = express.Router();

router.get(`/`, async (req, res) => {
    const userList = await User.find()
    if(!userList) {
        res.status(500).json({success: false})
    }
    res.send(userList)
})

router.post(`/`, (req, res) => {
    const newUser = req.body;
    res.send(newUser)
})

export const usersRoutes = router;