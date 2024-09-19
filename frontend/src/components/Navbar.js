import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/RecentRentals" className="nav-link">Recent Rentals</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Blog" className="nav-link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/Testimonials" className="nav-link">Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
