import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Hama Bwana Logo" className="footer-logo" />
        <p className="footer-address">
          1234 Real Estate Avenue, Nairobi, Kenya
          <br />
          Phone: (+254) 702 696140
          <br />
          Email: info@hamabwana.com
        </p>
      </div>
      <div className="footer-right">
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
          <Link to="/terms-of-use" className="footer-link">Terms of Use</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
        <p className="footer-copyright">
          © 2024 Hama Bwana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
