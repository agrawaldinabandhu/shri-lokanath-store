import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Products;
