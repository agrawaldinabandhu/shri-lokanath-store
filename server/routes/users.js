// routes/users.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const { name, email, address, phone, purchases } = req.body;

    const user = new User({
      name,
      email,
      address,
      phone,
      purchases // Array of purchased items [{ productId, name, price, quantity }, ...]
    });

    await user.save();
    res.status(201).json({ message: 'User created with purchases', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;
