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
      image: 'https://mansiondeal.com/public/uploads/1ahsdbjdhsndsbndsbdsnbdsm.webp', // Placeholder image, replace with real image URL
    },
    {
      id: 3,
      title: 'Top Areas to Rent in Kenya',
      excerpt: 'Explore the top areas in Kenya to find rental properties that suit your lifestyle...',
      image: 'https://t3.ftcdn.net/jpg/00/68/40/28/360_F_68402878_p2httgLERQEjWlWPwPYbXGil9Zhv2jih.jpg', // Placeholder image, replace with real image URL
    },
  ];

  return (
    <div style={styles.blogSection}>
      <h2 style={styles.blogTitle}>Blog</h2>
      <div style={styles.blogContainer}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.blogCard}>
            <img src={blog.image} alt={blog.title} style={styles.blogImage} />
            <h3 style={styles.blogCardTitle}>{blog.title}</h3>
            <p style={styles.blogExcerpt}>{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  blogSection: {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  blogTitle: {
    fontSize: '36px',
    color: '#004080',
    textAlign: 'center',
    marginBottom: '10px',
  },
  blogContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  blogCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    flex: '1',
  },
  blogImage: {
    width: '100%',
    borderRadius: '10px 10px 0 0',
  },
  blogCardTitle: {
    fontSize: '24px',
    color: '#333',
    margin: '10px 0',
  },
  blogExcerpt: {
    fontSize: '16px',
    color: '#666',
  },
};

export default BlogSection;
