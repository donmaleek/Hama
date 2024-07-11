import React from 'react';
import './TestimonialsSection.css';
import client1 from '../assets/client1.jpeg'; // Ensure these images exist in your assets folder
import client2 from '../assets/ladyclient2.jpeg';
import client3 from '../assets/client3.jpeg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mathias Alfred',
      image: client1,
      message: 'Hama Bwana helped me find the perfect rental home. The process was smooth and efficient. Highly recommend their services!',
    },
    {
      name: 'Queen Dama',
      image: client2,
      message: 'As a landlord, listing my properties on Hama Bwana was the best decision. I found reliable tenants quickly and with ease.',
    },
    {
      name: 'Phylis Mkenyi',
      image: client3,
      message: 'The customer service at Hama Bwana is top-notch. They guided me through the entire process and were always available to help.',
    },
  ];

  return (
    <div className="testimonials-section">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-message">"{testimonial.message}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
