import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: theme === 'light'
          ? 'linear-gradient(90deg, #ff6f00, #ff8f00)'
          : 'linear-gradient(90deg, #333, #555)',
        boxShadow: theme === 'light'
          ? '0 4px 12px rgba(255, 143, 0, 0.6)'
          : '0 4px 12px rgba(0,0,0,0.8)',
        padding: '0.8rem 1.5rem',
      }}
    >
      <Link
        className="navbar-brand fw-bold"
        to="/"
        style={{
          fontSize: '1.8rem',
          letterSpacing: '1.5px',
          color: theme === 'light' ? 'white' : '#ddd',
        }}
      >
        Shri Lokanath Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ borderColor: 'rgba(255,255,255,0.7)' }}
      >
        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          {['Home', 'Products', 'Cart', 'Checkout'].map((item) => (
            <li className="nav-item" key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="nav-link fw-semibold mx-2"
                style={{
                  color: theme === 'light' ? 'white' : '#ddd',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.target.style.color = '#ffeb3b')}
                onMouseLeave={e => (e.target.style.color = theme === 'light' ? 'white' : '#ddd')}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Toggle switch */}
          <li className="nav-item ms-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="themeSwitch"
                onChange={toggleTheme}
                checked={theme === 'dark'}
              />
              <label
                className="form-check-label"
                htmlFor="themeSwitch"
                style={{ color: theme === 'light' ? 'white' : '#ddd', userSelect: 'none' }}
              >
                {theme === 'light' ? 'Light' : 'Dark'}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
