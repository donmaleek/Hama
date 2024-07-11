import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';
import Slider from './Slider';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import AboutUsSection from './AboutUsSection';
import BlogSection from './BlogSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [regions, setRegions] = useState([]);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [region, setRegion] = useState('');
  const [county, setCounty] = useState('');
  const [subcounty, setSubcounty] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let url = 'http://localhost:5000/properties';

        // Adding filters based on region, county, subcounty
        if (region) {
          url += `?region=${region}`;
          if (county) {
            url += `&county=${county}`;
            if (subcounty) {
              url += `&subcounty=${subcounty}`;
            }
          }
        }

        const response = await axios.get(url);
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    const fetchFeaturedProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/properties/featured');
        setFeaturedProperties(response.data);
      } catch (error) {
        console.error('Error fetching featured properties:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    const fetchRegions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/regions');
        setRegions(response.data);
      } catch (error) {
        console.error('Error fetching regions:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    const fetchCounties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/counties');
        setCounties(response.data);
      } catch (error) {
        console.error('Error fetching counties:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    const fetchSubcounties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/subcounties');
        setSubcounties(response.data);
      } catch (error) {
        console.error('Error fetching subcounties:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    fetchProperties();
    fetchFeaturedProperties();
    fetchRegions();
    fetchCounties();
    fetchSubcounties();
  }, [region, county, subcounty]);

  const handleSearchClick = () => {
    // Fetch properties with the current search criteria
    fetchProperties();
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleCountyChange = (e) => {
    setCounty(e.target.value);
  };

  const handleSubcountyChange = (e) => {
    setSubcounty(e.target.value);
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <div className="filters">
          <label htmlFor="region">Region:</label>
          <select id="region" value={region} onChange={handleRegionChange}>
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region._id} value={region.name}>{region.name}</option>
            ))}
          </select>

          <label htmlFor="county">County:</label>
          <select id="county" value={county} onChange={handleCountyChange}>
            <option value="">Select County</option>
            {counties.map((county) => (
              <option key={county._id} value={county.name}>{county.name}</option>
            ))}
          </select>

          <label htmlFor="subcounty">Subcounty:</label>
          <select id="subcounty" value={subcounty} onChange={handleSubcountyChange}>
            <option value="">Select Subcounty</option>
            {subcounties.map((subcounty) => (
              <option key={subcounty._id} value={subcounty.name}>{subcounty.name}</option>
            ))}
          </select>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearchClick} className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <Map properties={filteredProperties} />

      <h2>Featured Rentals</h2>
      <Slider properties={featuredProperties} />

      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
