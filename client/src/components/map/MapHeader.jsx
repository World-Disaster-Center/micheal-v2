import React, { useState } from 'react';
import michaelicon from '../../assets/michaelicon.png'
import profile from '../../assets/profile.png'
import { CiHome } from "react-icons/ci";
import { BsSliders } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { BsCollectionPlayFill } from "react-icons/bs";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { FaGripLinesVertical } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TbArrowForwardUp } from "react-icons/tb";
import { PiLineVerticalLight } from "react-icons/pi";
import FilterModal from '../filterModal/FilterModal';

const MapHeader = () => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    return (
        <>
            <div className='flex w-[95%] items-center justify-between absolute left-1/2 transform -translate-x-1/2 my-10 z-10'>
                <div className='flex items-center gap-4'>
                    <img className='h-[47px] w-[47px] cursor-pointer hover:shadow-2xl transition-all duration-500' src={michaelicon} alt='' />
                    <FaGripLinesVertical />
                    <div className='flex px-auto backdrop-blur-2xl bg-white/10 rounded-full shadow-xl'>
                        <button className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
                            <CiHome className='h-[20px] w-[20px] hover:h-[23px] hover:w-[23px] transition-all duration-200' />
                        </button>
                        <button
                        onClick={() => setIsFilterModalOpen(true)}
                        className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
                            <BsSliders className='h-[20px] w-[20px] hover:h-[23px] hover:w-[23px] transition-all duration-200' />
                        </button>
                        <button className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
                            <IoGridOutline className='h-[20px] w-[20px] hover:h-[23px] hover:w-[23px] transition-all duration-200' />
                        </button>
                        <button className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
                            <BsCollectionPlayFill className='h-[20px] w-[20px] hover:h-[23px] hover:w-[23px] transition-all duration-200' />
                        </button>
                        <button className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
                            <MdOutlineInsertChartOutlined className='h-[20px] w-[20px] hover:h-[23px] hover:w-[23px] transition-all duration-200' />
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center relative'>
                        <input type='text' className='w-[316px] h-[38px] rounded-full p-5 text-sm border border-gray-300 shadow-lg focus:outline-none' placeholder='Search your location' />
                        <div className='flex items-center justify-center gap-2 absolute right-4'>
                            <IoSearch className='w-[20px] h-[20px] text-gray-600 hover:text-gray-800 cursor-pointer' />
                            <PiLineVerticalLight className='h-[30px] text-gray-600 hover:text-gray-800' />
                            <FaLocationDot className='w-[20px] h-[20px] text-gray-600 cursor-pointer' />
                            <TbArrowForwardUp className=' bg-[red] hover:bg-red-500 text-white w-[15px] h-[15px] cursor-pointer transform rotate-45 flex items-center justify-center' />
                        </div>
                    </div>
                    <FaGripLinesVertical />
                    <img className='h-[40px] w-[40px] bg-white border border-gray-300 shadow-lg hover:bg-gray-100 cursor-pointer rounded-full transition-all duration-300' src={profile} alt='' />
                </div>
            </div>
            <FilterModal 
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
            />
        </>
    )
}

export default MapHeader
