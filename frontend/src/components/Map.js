import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Separate CSS for map styling

const Map = ({ properties }) => {
  // Calculate dynamic center of the map based on property locations
  const averageLatitude = properties.reduce((sum, property) => sum + property.location.coordinates[1], 0) / properties.length;
  const averageLongitude = properties.reduce((sum, property) => sum + property.location.coordinates[0], 0) / properties.length;
  const mapCenter = properties.length > 0 ? [averageLatitude, averageLongitude] : [0, 0];

  return (
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={5} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {properties.map((property) => (
          <Marker
            key={property._id}
            position={[property.location.coordinates[1], property.location.coordinates[0]]}
          >
            <Popup>
              <div className="popup-content">
                <strong>{property.title}</strong><br />
                {property.description}<br />
                <strong>Price:</strong> ${property.price}<br />
                {/* Optional: Add a link to property details */}
                <a href={`/property/${property._id}`} className="popup-link">View Details</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
