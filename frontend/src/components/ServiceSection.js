import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKey, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './ServiceSection.css';

const services = [
  {
    icon: faHome,
    title: 'Wide Range of Rentals',
    description: 'Find a variety of rental properties to suit your needs, from apartments to family homes.',
  },
  {
    icon: faKey,
    title: 'Secure Transactions',
    description: 'We ensure that all transactions are secure and transparent, giving you peace of mind.',
  },
  {
    icon: faHandsHelping,
    title: 'Support Services',
    description: 'Our support team is here to help you with any queries or issues you may have.',
  },
];

const ServiceSection = () => {
  const containerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <h1 className="service-title">Our Services</h1>
      <h3 className="service-subtitle">Providing you with the best rental experience</h3>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
