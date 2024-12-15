import React from 'react'
import {  FaFilter, FaColumns, FaCamera } from "react-icons/fa";
import iconLogo from '../../assets/logos/icon.png';
import { GoHome } from 'react-icons/go';

const MichaelHeaderLeft = () => {
  return (
    <div className="flex   shadow-md  items-center space-x-2 bg-[rgba(255,255,255,0.5)] pr-2 rounded-r-full">
        <button className=" bg-white opacity-90 hover:opacity-100 py-1 px-4">
              <img src={iconLogo} alt='Michael Icon' width={48} height={41}/>
        </button>
        <div className="flex items-center space-x-3  ">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <GoHome size={18} />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaFilter size={18} />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaColumns size={18} />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaCamera size={18} />
          </button>
        </div>
      </div>
  )
}

export default MichaelHeaderLeft