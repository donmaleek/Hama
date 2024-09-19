import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import AboutUs from './AboutUsSection';
import BlogSection from './BlogSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [region, setRegion] = useState('');
  const [county, setCounty] = useState('');
  const [subcounty, setSubcounty] = useState('');

  const countyData = {
    'Nairobi': {
      'Nairobi County': ['Westlands', 'Lang\'ata', 'Embakasi', 'Kilimani', 'Karen'],
    },
    'Central': {
      'Kiambu': ['Thika', 'Ruiru', 'Gikambura', 'Limuru', 'Kiambu Town'],
      'Murang\'a': ['Murang\'a Town', 'Kangema', 'Kiharu'],
      'Nyandarua': ['Nyahururu', 'Ol Kalou', 'Ndaragwa', 'Kinangop'],
      'Nyeri': ['Nyeri Town', 'Mathira', 'Kieni'],
    },
    'Coast': {
      'Mombasa': ['Nyali', 'Kisauni', 'Changamwe', 'Likoni', 'Jomvu'],
      'Kilifi': ['Malindi', 'Kilifi Town', 'Gede', 'Bamburi'],
      'Kwale': ['Kwale Town', 'Ukunda', 'Diani', 'Lungalunga'],
      'Taita Taveta': ['Voi', 'Taveta', 'Wundanyi'],
    },
    'Western': {
      'Bungoma': ['Bungoma', 'Webuye', 'Chwele', 'Kimilili'],
      'Busia': ['Busia Town', 'Malaba', 'Teso North', 'Teso South'],
      'Vihiga': ['Vihiga', 'Sabatia', 'Luanda'],
    },
    'Nyanza': {
      'Kisumu': ['Kisumu Central', 'Nyando', 'Seme', 'Muhoroni'],
      'Homa Bay': ['Homa Bay Town', 'Rachuonyo South', 'Kasipul'],
      'Migori': ['Migori Town', 'Rongo', 'Awendo'],
      'Siaya': ['Siaya Town', 'Rarieda', 'Ugunja'],
    },
    'Rift Valley': {
      'Nakuru': ['Nakuru Town East', 'Nakuru Town West', 'Molo', 'Naivasha'],
      'Uasin Gishu': ['Eldoret', 'Kapseret', 'Turbo'],
      'Bomet': ['Bomet Town', 'Bomet Central', 'Chepalungu'],
      'Kericho': ['Kericho Town', 'Ainabkoi'],
      'Trans Nzoia': ['Kitale', 'Kiminini', 'Endebess'],
    },
    'Eastern': {
      'Embu': ['Embu Town', 'Manyatta', 'Runyenjes'],
      'Meru': ['Meru Town', 'Imenti North', 'Imenti South'],
      'Kitui': ['Kitui Town', 'Mwingi North', 'Mwingi West'],
      'Tharaka Nithi': ['Chuka', 'Meru South'],
      'Machakos': ['Machakos Town', 'Mavoko', 'Athi River'],
      'Makueni': ['Wote', 'Kangundo', 'Makindu'],
    },
    'North Eastern': {
      'Garissa': ['Garissa Town', 'Dadaab', 'Fafi'],
      'Wajir': ['Wajir East', 'Wajir West', 'Wajir South'],
      'Mandera': ['Mandera East', 'Mandera West', 'Mandera North'],
    },
  };

  const [regions, setRegions] = useState(Object.keys(countyData));
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);

  // Fetch properties when the component mounts
  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/properties');
      setProperties(response.data);
      setFilteredProperties(response.data); // Set the initial properties list to all fetched properties
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    setFilteredProperties(properties); // Ensure filtered properties is set with the initial data
  }, [properties]);

  const handleSearchClick = () => {
    console.log('Search button clicked');  // Debug log to confirm the event
    const filtered = properties.filter((property) => {
      const matchesRegion = region ? property.region.toLowerCase() === region.toLowerCase() : true;
      const matchesCounty = county ? property.county.toLowerCase() === county.toLowerCase() : true;
      const matchesSubcounty = subcounty ? property.subcounty.toLowerCase() === subcounty.toLowerCase() : true;

      return matchesRegion && matchesCounty && matchesSubcounty;
    });

    setFilteredProperties(filtered);
    console.log('Filtered Properties:', filtered);  // Debug log to check the filtered data
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    setCounties(Object.keys(countyData[selectedRegion] || {}));
    setSubcounties([]);
    setCounty('');
    setSubcounty('');
  };

  const handleCountyChange = (e) => {
    const selectedCounty = e.target.value;
    setCounty(selectedCounty);
    setSubcounties(countyData[region][selectedCounty] || []);
    setSubcounty('');
  };

  return (
    <div className="home-container">
      {/* Search Section */}
      <div className="search-section">
        <div className="filters">
          <label htmlFor="region">Region:</label>
          <select id="region" value={region} onChange={handleRegionChange}>
            <option value="">Select Region</option>
            {regions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>

          {counties.length > 0 && (
            <>
              <label htmlFor="county">County:</label>
              <select id="county" value={county} onChange={handleCountyChange}>
                <option value="">Select County</option>
                {counties.map((cty) => (
                  <option key={cty} value={cty}>
                    {cty}
                  </option>
                ))}
              </select>
            </>
          )}

          {subcounties.length > 0 && (
            <>
              <label htmlFor="subcounty">Subcounty:</label>
              <select id="subcounty" value={subcounty} onChange={(e) => setSubcounty(e.target.value)}>
                <option value="">Select Subcounty</option>
                {subcounties.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </>
          )}

          <button className="search-button" onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        {filteredProperties.length > 0 ? (
          <Map properties={filteredProperties} />
        ) : (
          <p>No properties available. Please try a different search.</p>
        )}
      </div>

      {/* Additional sections (Hero, Services, About, etc.) */}
      <div className="hero-section-container">
        <HeroSection />
      </div>

      <div className="service-section-container">
        <ServiceSection />
      </div>

      <div className="about-us-section-container">
        <AboutUs />
      </div>

      <div className="blog-section-container">
        <BlogSection />
      </div>

      <div className="testimonials-section-container">
        <TestimonialsSection />
      </div>

      <div className="contact-section-container">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
