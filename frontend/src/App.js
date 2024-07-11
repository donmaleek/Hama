import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import FeaturedRentals from './components/FeaturedRentals';
import About from './components/AboutUsSection'; // Import About component
import Blog from './components/BlogSection'; // Import Blog component
import Testimonials from './components/TestimonialsSection'; // Import Testimonials component
import Contact from './components/ContactSection'; // Import Contact component
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import Footer component
import './App.css';
import logo from './assets/logo2.png'; // Adjust the path according to your project structure

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
