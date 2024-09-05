import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    password: '',
    profilePicture: null,
  });

  // State to manage errors
  const [errors, setErrors] = useState({});
  
  // State for success or error messages
  const [message, setMessage] = useState('');
  
  // Hook for navigation after registration
  const navigate = useNavigate();

  // Function to handle changes in text inputs and textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle changes in the file input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  // Function to validate form data
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.email = formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid.') : 'Email is required.';
    tempErrors.description = formData.description ? '' : 'Description is required.';
    tempErrors.password = formData.password ? (formData.password.length >= 6 ? '' : 'Password must be at least 6 characters.') : 'Password is required.';
    tempErrors.profilePicture = formData.profilePicture ? '' : 'Profile picture is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (validate()) {
      const formDataWithImage = new FormData();
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('email', formData.email);
      formDataWithImage.append('description', formData.description);
      formDataWithImage.append('password', formData.password);
      if (formData.profilePicture) {
        formDataWithImage.append('profilePicture', formData.profilePicture);
      }

      try {
        // Send the form data to the backend via a POST request
        await axios.post('http://localhost:5000/api/users/register', formDataWithImage);

        // If successful, navigate to the login page
        setMessage('Registration successful! Redirecting to login...');
        navigate('/login');
      } catch (error) {
        if (error.response) {
          setMessage(`Registration failed: ${error.response.data.message || error.response.data}`);
        } else if (error.request) {
          setMessage('No response from server. Please try again later.');
        } else {
          setMessage(`Error: ${error.message}`);
        }
      }
    } else {
      setMessage('Please fix the errors in the form.');
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
        />
        {errors.name && <div style={styles.error}>{errors.name}</div>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}
        
        <textarea
          name="description"
          placeholder="Short description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
        />
        {errors.description && <div style={styles.error}>{errors.description}</div>}
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.password && <div style={styles.error}>{errors.password}</div>}
        
        <input
          type="file"
          name="profilePicture"
          onChange={handleFileChange}
          style={styles.fileInput}
        />
        {errors.profilePicture && <div style={styles.error}>{errors.profilePicture}</div>}
        
        <button type="submit" style={styles.button}>Register</button>
      </form>
      {message && <div style={styles.message}>{message}</div>}
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
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '16px',
    color: '#004080',
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
