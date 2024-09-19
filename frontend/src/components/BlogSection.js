import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Tips for a Smooth Rental Relocation',
      excerpt: 'Moving to a new rental can be stressful. Here are some tips to make your transition smoother...',
      image: 'https://img.freepik.com/premium-photo/car-with-luggage-rack-roof-is-driving-down-road_889227-22126.jpg',
    },
    {
      id: 2,
      title: 'Finding the Perfect Rental',
      excerpt: 'Discover the best strategies for finding a rental that meets all your needs...',
      image: 'https://mansiondeal.com/public/uploads/1ahsdbjdhsndsbndsbdsnbdsm.webp', 
    },
    {
      id: 3,
      title: 'Top Areas to Rent in Kenya',
      excerpt: 'Explore the top areas in Kenya to find rental properties that suit your lifestyle...',
      image: 'https://t3.ftcdn.net/jpg/00/68/40/28/360_F_68402878_p2httgLERQEjWlWPwPYbXGil9Zhv2jih.jpg',
    },
  ];

  return (
    <div className="blog-section">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
