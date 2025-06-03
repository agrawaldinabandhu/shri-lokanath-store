import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <section className="hero text-white text-center d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', minHeight: '60vh' }}>
        <div>
          <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3)' }}>Shri Lokanath Store</h1>
          <p className="lead mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
            Your one-stop shop for fresh groceries, delivered fast and safe.
          </p>
          <Link to="/products" className="btn btn-light btn-lg mt-3 px-5 py-3" style={{ fontWeight: '600', borderRadius: '30px' }}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className="features container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="feature-box shadow p-4 rounded" style={{ background: '#ffefba', backgroundImage: 'linear-gradient(45deg, #ffefba 0%, #ffffff 100%)' }}>
              <i className="bi bi-basket-fill fs-2 text-primary mb-3"></i>
              <h5 className="mb-3" style={{ color: '#3b3b98' }}>Fresh Products</h5>
              <p style={{ color: '#555' }}>We source directly from farms to ensure freshness in every order.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box shadow p-4 rounded" style={{ background: '#d4fc79', backgroundImage: 'linear-gradient(45deg, #96e6a1 0%, #d4fc79 100%)' }}>
              <i className="bi bi-credit-card-fill fs-2 text-success mb-3"></i>
              <h5 className="mb-3" style={{ color: '#1e824c' }}>Secure Payments</h5>
              <p style={{ color: '#555' }}>Multiple payment options secured with the latest encryption.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box shadow p-4 rounded" style={{ background: '#f6d365', backgroundImage: 'linear-gradient(45deg, #fda085 0%, #f6d365 100%)' }}>
              <i className="bi bi-truck fs-2 text-warning mb-3"></i>
              <h5 className="mb-3" style={{ color: '#af601a' }}>Fast Delivery</h5>
              <p style={{ color: '#555' }}>Delivery in under 24 hours across multiple locations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center py-5">
        <h2 className="mb-4" style={{ color: '#2575fc' }}>Why Choose Us?</h2>
        <p className="lead" style={{ maxWidth: '600px', margin: 'auto', color: '#666' }}>
          Shri Lokanath Store offers a seamless shopping experience, the freshest products, reliable delivery, and unmatched customer support. Join thousands of happy customers today!
        </p>
      </section>
    </div>
  );
}

export default Home;
