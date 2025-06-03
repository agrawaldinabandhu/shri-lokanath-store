import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';

function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;  // apply theme class to body
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
