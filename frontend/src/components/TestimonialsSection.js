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
      message: 'Hama Bwana made my search for the perfect rental seamless. The platform was easy to use, and I found my dream home in no time!',
    },
    {
      name: 'Queen Dama',
      image: client2,
      message: 'As a landlord, Hama Bwana has been a game-changer. I was able to list my properties and connect with trustworthy tenants almost immediately.',
    },
    {
      name: 'Phylis Mkenyi',
      image: client3,
      message: 'The support I received from Hama Bwana was outstanding. Their team guided me every step of the way, ensuring a smooth experience.',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <blockquote className="testimonial-message">"{testimonial.message}"</blockquote>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
