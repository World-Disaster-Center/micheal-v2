import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import naturalDisasterIcon from '../../assets/naturalIcon.png'
import locationPin from '../../assets/locationpin.png'
import MapHeader from './MapHeader'
import MapFooter from './MapFooter';
import disasters from './data';
import earthImage from '../../assets/earth2Image.jpeg'
import itineraryIcon from '../../assets/itineraryIcon.png'
import ApiComponent from '../features/ApiComponent';

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
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
    },
];

const Map = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAXDRJZqjnkbeev3t4HPx90Q4NyvyCMNw0',
    });

    const [map, setMap] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

    const handleMarkerClick = (markerId) => {
        setActiveMarker(markerId); // Set the active marker
    };

    const handleMapClick = () => {
        setActiveMarker(null) // Close the infoWindow
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
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error) => {
                console.log("Error getting user location:", error)
            }
        );
    }, [])

    const userLocationPin = () => {
        if (!window.google) return null;
        return {
            url: locationPin,
            size: new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 50)
        }

    }

    if (loadError) {
        return <div>Error loading Google Maps API: {loadError.message}</div>
    }

    return isLoaded ? (
        <div className='relative'>
            <MapHeader />
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation}
                zoom={12}
                onClick={handleMapClick}
                options={{
                    styles: mapStyles,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    zoomControl: true,
                    restriction: {
                        latLngBounds: {
                            north: 85,  // Northern boundary
                            south: -85, // Southern boundary
                            east: 179.99, // Eastern boundary
                            west: -179.99, // Western boundary
                        },
                        strictBounds: true, // Enforce staying within these bounds
                    },
                    minZoom: 2, // Prevent zooming out too far
                    maxZoom: 20, // Optional: Limit maximum zoom
                }}
                onLoad={onLoad}
                onUnmount={onUnmount}

            >
                {disasters.map((disaster) => (
                    <Marker
                        key={disaster.id}
                        onClick={() => handleMarkerClick(disaster.id)}
                        position={{
                            lat: disaster.location.latitude,
                            lng: disaster.location.longitude,
                        }}
                        icon={{
                            url: disaster.img,
                            scaledSize: new window.google.maps.Size(120, 120)
                        }}
                    >
                        {activeMarker === disaster.id && (
                            <InfoWindow>
                                <div className='h-[290px] w-[400px]'>
                                    <div className='flex'>
                                        <div>
                                            <img className='h-[150px] w-[300px] border rounded-xl' src={earthImage} alt='' />
                                        </div>
                                        <div className='flex flex-col ml-[10px] gap-2'>
                                            <button>
                                                <img className='h-[70px] w-[70px]' src={earthImage} alt='' />
                                            </button>
                                            <button>
                                                <img className='h-[70px] w-[70px] bg-slate-700 border rounded-xl' src={disaster.img} alt='' />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex my-2 '>
                                            <div className='h-[120px] w-[300px] bg-slate-700 text-gray-100 font-semibold border rounded-lg'>
                                                <p className='text-xs pl-[8px] pt-[8px] uppercase'>{disaster.type} </p>
                                                <p className='text-xs pl-[8px] pt-[8px]'>Last update: {disaster.dateSignaled} </p>
                                                <p className='text-xs pl-[8px] pt-[8px]'>Severity: {disaster.severity} </p>
                                                <p className='text-xs pl-[8px] pt-[8px]'>Description: {disaster.description}</p>
                                            </div>
                                            <button className='flex items-center bg-cyan-50 justify-center h-[70px] w-[70px] border rounded-lg shadow-md ml-[10px]'>
                                                <img className=' h-[35px] w-[35px]' src={itineraryIcon} alt='' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
                <Marker position={userLocation} icon={{
                    url: locationPin,
                    scaledSize: new window.google.maps.Size(50, 50)
                }} />
            </GoogleMap>
            <ApiComponent/>
            <MapFooter />
        </div>
    ) : (
        <></>
    );
};

export default Map;
