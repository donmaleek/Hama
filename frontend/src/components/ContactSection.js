import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Get in Touch</h1>
      <h2 className="contact-subtitle">We'd Love to Connect with You</h2>
      <p className="contact-content">
        At Hama Bwana, we pride ourselves on bridging the gap between renters and property owners. Whether you're searching for your next home or looking to find trustworthy tenants, our platform is here to simplify the process. From luxury apartments to affordable homes, we offer a comprehensive selection of properties across Kenya. Our goal is to provide you with an easy, stress-free rental experience, backed by reliable support and seamless service.
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> info@hamabwana.com</p>
        <p><strong>Phone:</strong> +254 702 696 140</p>
        <p><strong>Address:</strong> 123 Real Estate Avenue, Nairobi, Kenya</p>
      </div>
      <div className="contact-button-container">
        <button className="contact-button" onClick={() => window.open('https://www.linkedin.com', '_blank')}>
          Connect on LinkedIn
        </button>
        <button className="contact-button" onClick={() => window.open('https://www.twitter.com', '_blank')}>
          Follow Us on Twitter
        </button>
        <button className="contact-button" onClick={() => window.open('https://www.facebook.com', '_blank')}>
          Like Us on Facebook
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
