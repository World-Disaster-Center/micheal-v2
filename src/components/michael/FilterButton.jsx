import React from "react";

const FilterButton = ({ icon, label }) => {
  return (
    <button className="flex items-center space-x-2 px-4 py-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition">
      <img src={icon} alt={label} className="w-5 h-5 object-contain" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
  );
};

export default FilterButton;
