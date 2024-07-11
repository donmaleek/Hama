// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/login', formData);
      navigate('/profile');
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
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
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.register}>
        Don't have an account yet? <button style={styles.registerButton} onClick={() => navigate('/register')}>Register here</button>
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
  register: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '16px',
  },
  registerButton: {
    background: 'none',
    border: 'none',
    color: '#004080',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '16px',
  },
};

export default Login;
