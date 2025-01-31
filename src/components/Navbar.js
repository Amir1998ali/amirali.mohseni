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
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-between', // ✅ Distributes evenly across the navbar
    alignItems: 'center',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    width: '80%', // ✅ Ensures equal spacing on left & right
    maxWidth: '800px', // ✅ Keeps it balanced
  },
  navItem: {
    flex: 1, // ✅ Ensures equal spacing between all items
    textAlign: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 12px', // ✅ Clickable space
    display: 'inline-block',
  },
};

export default Navbar;
