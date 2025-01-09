import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { MdFlood } from "react-icons/md";
import { GiDesert, GiVolcano, GiTwister } from 'react-icons/gi';
import { RiEarthquakeFill } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { SiHackaday } from "react-icons/si";
import { FaHouseTsunami } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { Icon } from '@iconify/react';


// Configuration for disaster types
const disasterConfig = {
  volcanoes: {
    icon: GiVolcano,
    color: '#e03e1f',
    label: 'Volcano'
  },
  wildfires: {
    icon: BsFire,
    color: '#e06f1f',
    label: 'Wildfire'
  },
  floods: {
    icon: MdFlood,
    color: '#57fae4',
    label: 'Flood'
  },
  drought: {
    icon: GiDesert,
    color: '#fcff62',
    label: 'Drought'
  },
  earthquakes: {
    icon: RiEarthquakeFill,
    color: '#ff7575',
    label: 'Earthquake'
  },
  cyclones: {
    icon: GiTwister,
    color: '#a17c4b',
    label: 'Cyclone'
  },

  default: {
    icon: IoIosWarning,
    color: '#76ff76',
    label: 'Event'
  }
};

const CustomMarker = ({ disaster, isActive, onClick }) => {
  const categoryId = disaster.categories[0].id.toLowerCase();
  const config = disasterConfig[categoryId] || disasterConfig.default;
  const IconComponent = config.icon;

  // Convert React Icon to URL for Google Maps Marker
  const createMarkerIcon = () => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <foreignObject width="18" height="18">
          ${ReactDOMServer.renderToString(
            <IconComponent color={config.color} size={18} />
          )}
        </foreignObject>
      </svg>
    `;

    return {
      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
      scaledSize: new window.google.maps.Size(36, 36),
      anchor: new window.google.maps.Point(18, 18)
    };
  };

  return (
    <Marker
      position={{
        lat: disaster.geometry[0].coordinates[1],
        lng: disaster.geometry[0].coordinates[0]
      }}
      onClick={onClick}
      icon={createMarkerIcon()}
    >
      {isActive && (
        <InfoWindow onCloseClick={onClick}>
          <div className="p-4 max-w-sm bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <IconComponent color={config.color} size={24} />
              <h3 className="text-lg font-bold">{disaster.title}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm flex items-center gap-2">
                <span className="font-semibold">Type:</span> 
                {disaster.categories[0].title}
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="font-semibold">Date:</span> 
                {new Date(disaster.geometry[0].date).toLocaleDateString()}
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="font-semibold">Coordinates:</span>
                <span>
                  {disaster.geometry[0].coordinates[1].toFixed(4)}, 
                  {disaster.geometry[0].coordinates[0].toFixed(4)}
                </span>
              </p>
              {disaster.sources && disaster.sources.length > 0 && (
                <a 
                  href={disaster.sources[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2 mt-2"
                >
                  <Icon icon="mdi:link" />

                  View Source
                </a>
              )}
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default CustomMarker;
