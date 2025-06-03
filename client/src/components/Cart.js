function Cart({ cartItems, clearCart }) {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h3 style={{ 
        color: '#fffff', 
        background: 'linear-gradient(45deg, #ff4b2b, #ff416c)', 
        padding: '15px', 
        borderRadius: '12px', 
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(255, 65, 108, 0.5)'
      }}>
        Your Cart
      </h3>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', marginTop: '30px', fontWeight: '600' }}>
          No items in cart.
        </p>
      ) : (
        <>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginTop: '20px', 
            marginBottom: '30px', 
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
            boxShadow: '0 8px 15px rgba(253, 160, 133, 0.5)',
          }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px 20px',
                  borderBottom: index !== cartItems.length - 1 ? '1px solid rgba(255,255,255,0.6)' : 'none',
                  color: '#4a148c',
                  fontWeight: '600',
                }}
              >
                {item.name} <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
              border: 'none',
              borderRadius: '30px',
              color: 'white',
              fontWeight: '700',
              padding: '12px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 65, 108, 0.6)',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(45deg, #ff4b2b, #ff416c)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(45deg, #ff416c, #ff4b2b)')}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
