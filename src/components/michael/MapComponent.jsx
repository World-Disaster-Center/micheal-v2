import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../../config';


const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 0, // Default Latitude
  lng: 0, // Default Longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
