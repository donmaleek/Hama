// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">We Help you Relocate with confidence and Live with Ease</h1>
        <p className="hero-subtitle">Welcome to Hama Bwana, your trusted partner in finding the perfect rental properties. We offer a wide range of rentals to suit your needs.</p>
        <button className="hero-button" onClick={() => navigate('/register')}>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
