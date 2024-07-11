// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    password: '',
    profilePicture: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append('name', formData.name);
    formDataWithImage.append('email', formData.email);
    formDataWithImage.append('description', formData.description);
    formDataWithImage.append('password', formData.password);
    if (formData.profilePicture) {
      formDataWithImage.append('profilePicture', formData.profilePicture);
    }

    try {
      await axios.post('http://localhost:5000/register', formDataWithImage);
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Short description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="file"
          name="profilePicture"
          onChange={handleFileChange}
          style={styles.fileInput}
          required
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <p style={styles.login}>
        Or already have an account? <button style={styles.loginButton} onClick={() => navigate('/login')}>Login here</button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '36px',
    color: '#004080',
    textAlign: 'center',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  fileInput: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#004080',
    color: 'white',
    border: 'none',
    padding: '15px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    borderRadius: '5px',
  },
  login: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '16px',
  },
  loginButton: {
    background: 'none',
    border: 'none',
    color: '#004080',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '16px',
  },
};

export default Register;
