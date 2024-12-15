import React from "react";
import { FaGlobe, FaHandPeace, FaSun, FaMountain, FaWater, FaBolt, FaSatelliteDish, FaRobot, FaWind } from "react-icons/fa";

// Array of filters
const filters = [
  { id: 1, label: "Natural", icon: <FaGlobe /> },
  { id: 2, label: "Demonstrations", icon: <FaHandPeace /> },
  { id: 3, label: "Drought", icon: <FaSun /> },
  { id: 4, label: "Earthquake", icon: <FaMountain /> },
  { id: 5, label: "Flood", icon: <FaWater /> },
  { id: 6, label: "Political Violence", icon: <FaBolt /> },
  { id: 7, label: "Strategic Developments", icon: <FaSatelliteDish /> },
  { id: 8, label: "Technological", icon: <FaRobot /> },
  { id: 9, label: "Tropical Cyclone THREE-24", icon: <FaWind /> },
];

const MichaelFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[rgba(255,255,255,0.8)] shadow-md p-3 z-[999] flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <button className="p-3 rounded-full bg-red-100 shadow-md">
          <FaGlobe className="w-6 h-6 text-red-500" />
        </button>
        <div className="text-gray-700 text-sm font-medium">Map type</div>
      </div>

      {/* Filters Section */}
      <div className="flex items-center space-x-2 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className="flex items-center space-x-2 px-4 py-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition"
          >
            <span className="text-lg text-gray-700">{filter.icon}</span>
            <span className="text-sm font-medium text-gray-700">{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center flex-col space-y-1">
        <button className="p-3 rounded-full bg-gray-100 shadow-md">
          <FaRobot className="w-6 h-6 text-gray-700" />
        </button>
        <div className="text-gray-700 text-sm font-medium">Translate</div>
      </div>
    </div>
  );
};

export default MichaelFooter;
