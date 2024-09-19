import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FeaturedRentals from './components/FeaturedRentals';
import About from './components/AboutUsSection';
import Blog from './components/BlogSection';
import Testimonials from './components/TestimonialsSection';
import Contact from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import RecentRentals from './components/RecentRentals'; // Import RecentRentals component

import './App.css';
import logo from './assets/logo2.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured-rentals" element={<FeaturedRentals />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/RecentRentals" element={<RecentRentals />} /> {/* Correct route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
