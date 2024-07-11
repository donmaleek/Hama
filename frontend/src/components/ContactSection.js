import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <h2 className="contact-subtitle">We'd Love to Hear from You</h2>
      <p className="contact-content">
        At Hama Bwana, we are committed to connecting renters with the perfect properties and supporting landlords in finding reliable tenants. As a premier real estate rental business in Kenya, we offer a wide range of rental listings, from luxury apartments to affordable housing options. Our platform is designed to make the rental process as smooth and efficient as possible, providing a user-friendly interface and comprehensive resources for both renters and landlords.
      </p>
      <div className="contact-info">
        <p>Email: info@hamabwana.com</p>
        <p>Phone: +254 700 000 000</p>
        <p>Address: 123 Real Estate Avenue, Nairobi, Kenya</p>
      </div>
      <div className="contact-button-container">
        <button className="contact-button" onClick={() => window.open('https://www.linkedin.com', '_blank')}>
          LinkedIn
        </button>
        <button className="contact-button" onClick={() => window.open('https://www.twitter.com', '_blank')}>
          Twitter
        </button>
        <button className="contact-button" onClick={() => window.open('https://www.facebook.com', '_blank')}>
          Facebook
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
