import React, { useState } from 'react';
import axios from 'axios';

function Checkout({ cartItems }) {
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Cart is empty. Add products before checkout.');
      return;
    }
    if (!buyer.name || !buyer.email || !buyer.address) {
      alert('Please fill all buyer details.');
      return;
    }

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

    try {
      const orderData = {
        buyer,
        items: cartItems,
        totalAmount,
      };

      const response = await axios.post('http://localhost:5000/api/orders', orderData);

      if (response.status === 201) {
        alert('Order placed successfully!');
        // Optionally clear cart after order success
      }
    } catch (error) {
      console.error('Order submission error:', error);
      alert('Failed to place order. Try again later.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', background: '#fff3e0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)' }}>
      <h2 style={{ textAlign: 'center', color: '#ef6c00', marginBottom: '30px', fontWeight: '700' }}>Checkout</h2>

      <h3 style={{ color: '#bf360c', marginBottom: '15px' }}>Cart Items</h3>
      {cartItems.length === 0 ? (
        <p style={{ color: '#bf360c', fontStyle: 'italic' }}>No items in cart.</p>
      ) : (
        <ul className="list-group mb-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          {cartItems.map((item, idx) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={idx}
              style={{ backgroundColor: idx % 2 === 0 ? '#fff8e1' : '#ffe0b2', fontWeight: '600', color: '#5d4037' }}
            >
              {item.name} <span>₹{item.price}</span>
            </li>
          ))}
          <li
            className="list-group-item d-flex justify-content-between fw-bold"
            style={{ backgroundColor: '#ffb74d', color: '#3e2723', fontSize: '1.1rem' }}
          >
            Total: ₹{cartItems.reduce((sum, item) => sum + item.price, 0)}
          </li>
        </ul>
      )}

      <h3 style={{ color: '#bf360c', marginBottom: '15px' }}>Buyer Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" style={{ fontWeight: '600', color: '#6d4c41' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="form-control"
            style={{ borderColor: '#ff9800' }}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" style={{ fontWeight: '600', color: '#6d4c41' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="form-control"
            style={{ borderColor: '#ff9800' }}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" style={{ fontWeight: '600', color: '#6d4c41' }}>Address:</label>
          <textarea
            id="address"
            name="address"
            value={buyer.address}
            onChange={handleChange}
            className="form-control"
            style={{ borderColor: '#ff9800' }}
            rows={3}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning w-100 fw-bold"
          style={{ background: 'linear-gradient(90deg, #ff6f00, #ff8f00)', border: 'none' }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
