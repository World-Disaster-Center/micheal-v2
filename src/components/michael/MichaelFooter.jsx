import React from "react";
import { FaGlobe, FaHandPeace, FaSun, FaMountain, FaWater, FaBolt, FaSatelliteDish, FaRobot, FaWind, FaMap } from "react-icons/fa";
import { MdMap } from "react-icons/md";

// Array of filters
const filters = [
  { id: 1, label: "Natural", icon: <FaGlobe  /> },
  { id: 2, label: "Demonstrations", icon: <FaHandPeace  /> },
  { id: 3, label: "Drought", icon: <FaSun  /> },
  { id: 4, label: "Earthquake", icon: <FaMountain  /> },
  { id: 5, label: "Flood", icon: <FaWater  /> },
  { id: 6, label: "Political", icon: <FaBolt  /> },
  { id: 7, label: "Developments", icon: <FaSatelliteDish  /> },
  { id: 8, label: "Technological", icon: <FaRobot  /> },
  { id: 9, label: "Cyclone", icon: <FaWind  /> },
];

const MichaelFooter = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl mx-auto px-4  shadow-md p-1 z-[999] flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <button className="p-3 rounded-full bg-red-100 shadow-md">
          <FaGlobe className="w-4 h-4 text-red-500" />
        </button>
       <div className="flex items-center flex-col space-y-1">
        <button className="p-3 rounded-full bg-gray-100 shadow-md">
          <MdMap  className="w-4 h-4 text-gray-700" />
        </button>
        {/*<div className="text-gray-700 text-sm font-medium">Map Type</div>*/}
      </div>
      </div>

      {/* Filters Section */}
      <div className="flex items-center space-x-1 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className="flex items-center space-x-2 px-2 py-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition"
          >
            <span className="text-xs text-gray-700">{filter.icon}</span>
            <span className="text-xs font-medium text-gray-700">{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center flex-col space-y-1">
        <button className="p-3 rounded-full bg-gray-100 shadow-md">
          <FaRobot  className="w-4 h-4 text-gray-700" />
        </button>
        {/*<div className="text-gray-700 text-sm font-medium">Translate</div>*/}
      </div>
    </div>
  );
};

export default MichaelFooter;
