// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</Link></li>
        <li><Link to="/experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Link></li>
        <li><Link to="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
