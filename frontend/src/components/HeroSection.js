import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Relocate with Confidence, Settle with Ease</h1>
        <p className="hero-subtitle">Discover your next home with Hama Bwana. From luxurious rentals to budget-friendly options, we make your move simple and stress-free.</p>
        <button className="hero-button" onClick={() => navigate('/register')}>Lets Start Home Hunting</button>
      </div>
    </div>
  );
};

export default HeroSection;
