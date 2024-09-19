import React from 'react';
import './AboutUsSection.css';
import aboutUsImage from '../assets/logo1.png'; // Ensure this image exists in your assets folder

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <h1 className="about-us-title">Who We Are</h1>
      <div className="about-us-content">
        <img src={aboutUsImage} alt="About Us" className="about-us-image" />
        <div className="about-us-text-container">
          <p className="about-us-text">
            Welcome to <strong>Hama Bwana</strong>, Kenya’s premier real estate rental platform, where finding the perfect home or tenant is made simple and efficient. Whether you're seeking luxurious apartments or budget-friendly housing, Hama Bwana is your go-to destination for a hassle-free rental experience.
          </p>
          <p className="about-us-text">
            Our platform was built with the vision of transforming the way Kenyans approach renting. We are here to bridge the gap between landlords and tenants, offering innovative tools that cater to the evolving needs of the real estate market. With our user-friendly platform, you can browse, list, and rent properties with ease.
          </p>
          <p className="about-us-text">
            At Hama Bwana, we are driven by three core values: <strong>transparency</strong>, <strong>reliability</strong>, and <strong>customer satisfaction</strong>. Our team is dedicated to offering exceptional support at every step of your rental journey. From initial property searches to lease agreements, we ensure you are fully supported throughout the process.
          </p>
          <p className="about-us-text">
            Whether you’re searching for a new place to call home or want to list your property, trust <strong>Hama Bwana</strong> to connect you to the right people. Join us today, and discover the future of renting in Kenya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
