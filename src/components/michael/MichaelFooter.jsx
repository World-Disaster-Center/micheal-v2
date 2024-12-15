import React from "react";
import FilterButton from "./FilterButton";

// Import filter icons
import NaturalIcon from "../../assets/filters/natural.png";
import DemonstrationIcon from "../../assets/filters/demonstrations.png";
import DroughtIcon from "../../assets/filters/drought.png";
import EarthquakeIcon from "../../assets/filters/earthquake.png";
import FloodIcon from "../../assets/filters/flood.png";
import PoliticalIcon from "../../assets/filters/political.png";
import StrategicIcon from "../../assets/filters/strategic.png";
import TechnologicalIcon from "../../assets/filters/technological.png";
import CycloneIcon from "../../assets/filters/cyclone.png";

const MichaelFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[rgba(255,255,255,0.8)] shadow-md p-3 z-[999] flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <button className="p-3 rounded-full bg-red-100 shadow-md">
          <img src={NaturalIcon} alt="Map Type" className="w-7 h-7" />
        </button>
        <div className="text-gray-700 text-sm font-medium">Map type</div>
      </div>

      {/* Filters Section */}
      <div className="flex items-center space-x-2 overflow-x-auto">
        <FilterButton icon={NaturalIcon} label="Natural" />
        <FilterButton icon={DemonstrationIcon} label="Demonstrations" />
        <FilterButton icon={DroughtIcon} label="Drought" />
        <FilterButton icon={EarthquakeIcon} label="Earthquake" />
        <FilterButton icon={FloodIcon} label="Flood" />
        <FilterButton icon={PoliticalIcon} label="Political violence" />
        <FilterButton icon={StrategicIcon} label="Strategic developments" />
        <FilterButton icon={TechnologicalIcon} label="Technological" />
        <FilterButton icon={CycloneIcon} label="Tropical Cyclone THREE-24" />
      </div>

      {/* Right Section */}
      <div>
        <button className="p-3 rounded-full bg-gray-100 shadow-md">
          <img
            src={TechnologicalIcon}
            alt="Translate"
            className="w-6 h-6 object-contain"
          />
        </button>
        <div className="text-gray-700 text-sm font-medium text-center">
          Translate
        </div>
      </div>
    </div>
  );
};

export default MichaelFooter;
