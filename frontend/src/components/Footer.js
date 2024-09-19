import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-alt">
      <div className="footer-alt-container">
        <div className="footer-alt-left">
          <img src={logo} alt="Hama Bwana Logo" className="footer-alt-logo" />
          <div className="footer-alt-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-alt-social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-alt-social-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-alt-social-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="footer-alt-center">
          <p className="footer-alt-address">
            1234 Real Estate Avenue, Nairobi, Kenya
            <br />
            Phone: (+254) 702 696140
            <br />
            Email: info@hamabwana.com
          </p>
        </div>
        <div className="footer-alt-right">
          <div className="footer-alt-links">
            <Link to="/cookie-policy" className="footer-alt-link">Cookie Policy</Link>
            <Link to="/terms-of-use" className="footer-alt-link">Terms of Use</Link>
            <Link to="/privacy-policy" className="footer-alt-link">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-alt-bottom">
        <p>© 2024 Hama Bwana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
