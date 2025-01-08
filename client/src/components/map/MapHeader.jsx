import React, { useState } from 'react';
import { BsCollectionPlayFill, BsSliders } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoGridOutline, IoSearch } from "react-icons/io5";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";
import { TbArrowForwardUp } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import michaelicon from '../../assets/michaelicon.png';
import profile from '../../assets/profile.png';
import { sendAlert } from '../../redux/services/prediction/alerts';
import FilterModal from '../filterModal/FilterModal';
import { TbArrowForwardUp } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import michaelicon from '../../assets/michaelicon.png';
import profile from '../../assets/profile.png';
import { sendAlert } from '../../redux/services/prediction/alerts';

const MapHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();
    const handleOpenDisasterEmailAlterModal = () => {
        setIsOpen(true)
    }
    const handleCloseDisasterEmailAlterModal = () => {
        setIsOpen(false)
    }
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();
    const handleOpenDisasterEmailAlterModal = () => {
        setIsOpen(true)
    }
    const handleCloseDisasterEmailAlterModal = () => {
        setIsOpen(false)
    }
    return (
        <>
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
                        <button
                    onClick={() => navigate('/videos')}
                    className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
                            <BsCollectionPlayFill className='h-[20px] w-[20px] hover:h-[23px] hover:w-[23px] transition-all duration-200' />
                        </button>
                        <button onClick={
                        handleOpenDisasterEmailAlterModal
                    } className='flex items-center justify-center w-[40px] h-[40px] m-2 bg-gray-50 rounded-full border shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-200 transition-all duration-500'>
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
        {
            isOpen && <DisasterEmailAlterModal onClose={handleCloseDisasterEmailAlterModal} />
        }
        </>

    )
}

export default MapHeader


const listOfCities = ["Goma", "Kigali", "Bujumbura", "Kampala", "Lubumbashi", "Kisangani", "Kisumu", "Nairobi", "Dar es Salaam", "Mogadishu", "Addis Ababa"]
    .filter((city, index, self) => self.indexOf(city) === index); // Remove duplicates

const DisasterEmailAlterModal = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await sendAlert({
            receiver_email:email,
            cities: [selectedCity],
        })
        console.log("response",response)
        toast.success("Alert sent successfully");
        onClose();
    };

    return (
        <>
            <div 
                className="fixed h-screen w-screen inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="fixed top-[19%] left-[16%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 z-50 w-96">
                <h2 className="text-2xl font-bold mb-4">Disaster Email Alert</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
              className="w-full p-3 outline-none rounded bg-transparent border border-gray-600"
                           
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Select City
                        </label>
                        <select
                            id="city"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            required
            className="w-full outline-none p-3 rounded bg-transparent border border-gray-600">
                           
                            <option value="">Select a city</option>
                            {listOfCities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                            Send Alert
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};


