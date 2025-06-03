import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// Create new order
router.post('/', async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'Failed to create order', error });
  }
});

export default router;
