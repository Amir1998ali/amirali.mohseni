import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.navItem}><Link to="/portfolio" style={styles.link}>Portfolio</Link></li>
        <li style={styles.navItem}><Link to="/experience" style={styles.link}>Experience</Link></li>
        <li style={styles.navItem}><Link to="/education" style={styles.link}>Education</Link></li>
      </ul>
    </nav>
  );
};

// Styles
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '12px 0',
    width: '100vw',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    flexWrap: 'wrap',
    gap: '20px', // ✅ Ensures even spacing between items
  },
  navItem: {
    margin: '5px 20px', // ✅ Adjusts spacing dynamically
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 12px', // ✅ Adds clickable space around links
  },
};

export default Navbar;
