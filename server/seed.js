const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany([
      { name: 'Rice', price: 50 },
      { name: 'Wheat Flour', price: 40 },
      { name: 'Sugar', price: 45 },
    ]);
    console.log('Sample products inserted');
    process.exit();
  })
  .catch(err => console.error(err));
