import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import MapHeader from './MapHeader'
import MapFooter from './MapFooter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDisasters, fetchDisastersByCategory } from '../../redux/services/disasters';
import CustomMarker from './CustomMarker';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = {
    lat: -1.683,
    lng: 29.217,
};

// Custom styles to remove labels, roads, and other map data
const mapStyles = [
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b2e0ff",
        },
      ],
    },
  ];

const Map = () => {
    const dispatch = useDispatch();
    const { disasters, filteredDisasters, loading } = useSelector((state) => state.disasters);
    const [activeMarker, setActiveMarker] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [mapType, setMapType] = useState('roadmap');
  
    const { isLoaded, loadError } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    });
  
    useEffect(() => {
      dispatch(fetchDisasters());
      // Get user location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => console.log("Error getting user location:", error)
      );
    }, [dispatch]);
  
    const handleMarkerClick = (markerId) => {
      setActiveMarker(markerId === activeMarker ? null : markerId);
    };
  
    const handleMapClick = () => {
      setActiveMarker(null);
    };
  
    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps...</div>;
  
    return (
      <div className='relative'>
        <MapHeader />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation || center}
          zoom={3}
          onClick={handleMapClick}
          options={{
            mapTypeId: mapType,
            styles: mapStyles,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
            restriction: {
              latLngBounds: {
                north: 85,
                south: -85,
                east: 179.99,
                west: -179.99,
              },
              strictBounds: true,
            },
            minZoom: 2,
            maxZoom: 20,
          }}
        >
          {filteredDisasters.map((disaster) => (
            <CustomMarker
              key={disaster.id}
              disaster={disaster}
              isActive={activeMarker === disaster.id}
              onClick={() => handleMarkerClick(disaster.id)}
            />
          ))}
        </GoogleMap>
        <MapFooter 
          onCategorySelect={(categoryId) => dispatch(fetchDisastersByCategory(categoryId))}
          onMapTypeChange={setMapType}  
        />
      </div>
    );
  };
  

export default Map;
