import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        AMANDARINA<span className="dot">.CL</span>
      </div>
      <div className="navbar-links">
        <button onClick={onLogout} className="nav-logout-btn">Salir</button>
      </div>
    </nav>
  );
};

export default Navbar;