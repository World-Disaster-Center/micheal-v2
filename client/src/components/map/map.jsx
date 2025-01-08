import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import locationPin from '../../assets/locationpin.png'
import MapHeader from './MapHeader'
import MapFooter from './MapFooter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDisasters, fetchDisastersByCategory } from '../../redux/services/disasters';
import CustomMarker from './CustomMarker';
import disasters from './data';
import earthImage from '../../assets/earth2Image.jpeg'
import itineraryIcon from '../../assets/itineraryIcon.png'
import { setSelectedLocation } from "../../redux/slice/prediction/";
import PredictionDrawer from '../features/PredictionDrawer';

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

    const [map, setMap] = useState(null);;
    const [isPredDrawerOpen, setIsPredDrawerOpen] = useState(false);

    const handleOpenPredDrawer = () => {
        setIsPredDrawerOpen(true);
      };
      const handleClosePredDrawer = () => {
        setIsPredDrawerOpen(false);
      };
    const handleMarkerClick = (markerId) => {
        setActiveMarker(markerId); // Set the active marker
    };

    const handleMapClick = (location) => {
        setActiveMarker(null)
      dispatch(setSelectedLocation(location));
      handleOpenPredDrawer();
    }


    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

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
  
  
    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps...</div>;
  
    return (
      <div className='relative'>
        <MapHeader />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation || center}
          zoom={3}
          onClick={(e) => handleMapClick({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
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
            <PredictionDrawer isOpen={isPredDrawerOpen} onClose={handleClosePredDrawer}  />

      </div>
    );
  };
  

export default Map;
