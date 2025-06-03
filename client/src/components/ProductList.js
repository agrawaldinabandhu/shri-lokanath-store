import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product._id}>
          <div
            className="card h-100 text-white"
            style={{
              background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
              boxShadow: '0 8px 15px rgba(255, 105, 180, 0.3)',
              borderRadius: '15px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div className="card-body d-flex flex-column">
              <h5 className="card-title" style={{ color: '#3a0ca3' }}>{product.name}</h5>
              <p className="card-text" style={{ fontWeight: '600', color: '#720026' }}>₹{product.price}</p>
              <button
                className="btn btn-gradient mt-auto"
                onClick={() => addToCart(product)}
                style={{
                  background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
                  border: 'none',
                  borderRadius: '30px',
                  color: 'white',
                  fontWeight: '600',
                  padding: '10px 0',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(45deg, #ff4b2b, #ff416c)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(45deg, #ff416c, #ff4b2b)')}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
