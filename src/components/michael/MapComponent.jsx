import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import config from '../../config';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 0, // Default Latitude
  lng: 0, // Default Longitude
};

// Predefined locations with custom icons, title, description, and image
const locations = [
  {
    id: 1,
    position: { lat: 37.7749, lng: -122.4194 },
    title: 'San Francisco',
    description: 'A beautiful city in California.',
    image: 'https://picsum.photos/200',
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  },
  {
    id: 2,
    position: { lat: 48.8566, lng: 2.3522 },
    title: 'Paris',
    description: 'The capital of France, known for its art and fashion.',
    image: 'https://picsum.photos/200',
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
  },
  {
    id: 3,
    position: { lat: 35.6895, lng: 139.6917 },
    title: 'Tokyo',
    description: 'A bustling city blending modern and traditional culture.',
    image: 'https://picsum.photos/200',
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
  },
];

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [customLocations, setCustomLocations] = useState([]);

  const handleMapClick = (e) => {
    const newLocation = {
      id: Date.now(),
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
      title: 'Custom Location',
      description: 'User-selected location.',
      image: 'https://picsum.photos/200',
      icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    };
    setCustomLocations((prev) => [...prev, newLocation]);
  };

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <LoadScript googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={3}
        onClick={handleMapClick}
      >
        {/* Render predefined locations */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={location.icon}
            onClick={() => handleMarkerClick(location)}
          />
        ))}

        {/* Render user-selected locations */}
        {customLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={location.icon}
            onClick={() => handleMarkerClick(location)}
          />
        ))}

        {/* Render InfoWindow for selected location */}
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h3>{selectedLocation.title}</h3>
              <p>{selectedLocation.description}</p>
              <img
                src={selectedLocation.image}
                alt={selectedLocation.title}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
