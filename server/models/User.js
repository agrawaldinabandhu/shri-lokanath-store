// models/User.js
import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: String,
  price: Number,
  quantity: { type: Number, default: 1 }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: String,
  phone: String,
  purchases: [purchaseSchema]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
