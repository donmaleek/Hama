import React from 'react';
import './AboutUsSection.css';
import aboutUsImage from '../assets/logo1.png'; // Ensure this image exists in your assets folder

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <img src={aboutUsImage} alt="About Us" className="about-us-image" />
        <div className="about-us-text-container">
          <p className="about-us-text">
            Hama Bwana is a leading real estate rental platform dedicated to connecting tenants with landlords across Kenya. Founded with the mission to simplify the rental process, we offer a wide range of rental properties, from luxury apartments to affordable housing. Our platform is designed to provide a seamless and efficient experience for both renters and landlords.
          </p>
          <p className="about-us-text">
            We understand the challenges faced in the rental market and strive to offer comprehensive solutions to meet the diverse needs of our clients. Our team is committed to delivering exceptional customer service and support throughout the rental journey. At Hama Bwana, we prioritize transparency, reliability, and satisfaction, ensuring that every interaction is a positive one.
          </p>
          <p className="about-us-text">
            Whether you are looking for a new place to call home or seeking to rent out your property, Hama Bwana is your trusted partner in real estate. Join us today and experience the future of rental solutions in Kenya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
