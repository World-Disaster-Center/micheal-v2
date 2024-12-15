import React from 'react'
import { FaUserCircle, FaSearch, FaBell } from "react-icons/fa";
import { GiPositionMarker, GiReturnArrow } from 'react-icons/gi';
import { MdLocationPin } from 'react-icons/md';

const MichaelHeaderRight = () => {
  return (
    <div className="flex   items-center space-x-4 mr-4">
        {/* Search Bar */}
        <div className=" flex items-center space-x-2 p-2 pl-4 pr-4 rounded-full bg-gray-100 ">
          <input
            type="text"
            placeholder="Select your position"
            className=" bg-gray-100 text-sm focus:outline-none "
          />
              <FaSearch className="text-gray-400" />
              <small>| </small>
              <MdLocationPin />
              <GiReturnArrow/>
        </div>
              <small>|| </small>

        {/* User Profile */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaUserCircle size={24} className="text-gray-600" />
          </button>
      </div>
  )
}

export default MichaelHeaderRight