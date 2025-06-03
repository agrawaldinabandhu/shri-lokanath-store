const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  buyer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
