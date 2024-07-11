import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Services" style={styles.navLink}>Featured Rentals</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/About" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Blog" style={styles.navLink}>Blog</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Testimonials" style={styles.navLink}>Testimonials</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Contact" style={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#004080', // Dark blue background
    color: 'white',
    fontFamily: 'Arial, sans-serif', // Professional font
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  logoContainer: {
    flexShrink: 0,
  },
  logo: {
    height: '40px',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#0066cc', // Slightly lighter blue for hover
    borderRadius: '5px',
  }
};

export default Navbar;
