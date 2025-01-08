import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDisastersByCategory } from '../../redux/services/disasters';
import MapTypeModal from './MapTypeModal';
import naturalIcon from '../../assets/natural1.png'
import chatIcon from '../../assets/chatIcon.png'
import mapIcon from '../../assets/mapIcon.png'
import translate from '../../assets/translate.png'
import droughtIcon from '../../assets/drought1.png'
import earthquakeIcon from '../../assets/earthquake1.png'
import floodIcon from '../../assets/flood1.png'
import politicalIcon from '../../assets/politic1.png'
import strategicIcon from '../../assets/strat1.png'
import technologicalIcon from '../../assets/tech1.png'
import tropicalCyclone from '../../assets/cyclone1.png';

import ChatAIFloater from '../features/chatFloater';
import wildFire from '../../assets/wildfire.png'


const buttonDisasters = [
    {
        name: "Volcanoes",
        img: naturalIcon,
        id: "volcanoes"
    },
    {
        name: "Wildfires",
        img: wildFire,
        id: "wildfires"
    },
    
    {
        name: "Drought",
        img: droughtIcon,
        id: "drought"
    },
    {
        name: "Earthquake",
        img: earthquakeIcon,
        id: "earthquakes"
    },
    {
        name: "Flood",
        img: floodIcon,
        id: "floods"
    },
    {
        name: "Violences",
        img: politicalIcon
    },
    {
        name: "Development",
        img: strategicIcon,
        id: "dustHaze"
    },
    {
        name: "Technological",
        img: technologicalIcon,
        id: "manmade"
    },
    {
        name: "Cyclones",
        img: tropicalCyclone,
        id: "severeStorms"
    }
]

const MapFooter = ({ onMapTypeChange }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [openPanel, setOpenPanel] = useState(false);
  const [riskNotification, setRiskNotification] = useState("");


  const watchId = navigator.geolocation.watchPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    setUserLocation({ lat: latitude, lng: longitude });
    // TODO -> Fix this later ( i commented this just to reduce errors and warning in development)
    // const response = await FetchRiskAdvice({ lat: latitude, lng: longitude });
    // // console.log(response);
    // if(response?.success){
    //   setRiskNotification(response.advice);
    // }else{
    //   console.log('Error fetching risk advice:', response);
    //   setError('Error fetching risk advice');
    // }
  });

  useEffect(() => {
    if (navigator.geolocation) {
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, []);


  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };



    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const mapTypeButtonRef = useRef(null);

    const handleCategoryClick = (categoryId) => {
        if (categoryId) {
            dispatch(fetchDisastersByCategory(categoryId));
        }
    };

    const handleMapTypeSelect = (mapType) => {
        if (onMapTypeChange) {
            onMapTypeChange(mapType);
        }
    };




    return (
        <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl mx-auto px-4 flex items-center justify-center'>
            <div className='flex gap-4 mx-10 my-10'>
                <button onClick={toggleChat} className='flex items-center justify-center bg-white h-[50px] w-[50px] rounded-full border-gray-300 shadow-lg hover:bg-slate-300 transition-all duration-400'>
                    <img className='' src={chatIcon} alt="Chat" />
                </button>
                <button
                  ref={mapTypeButtonRef}
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  className='flex items-center justify-center bg-white h-[50px] w-[50px] rounded-full border-gray-300 shadow-lg hover:bg-slate-300 transition-all duration-400'
                >
                    <img src={mapIcon} alt="Map type" />
                </button>
            </div>

            <div className='flex gap-4 my-10'>
                {buttonDisasters.map((button) => (
                    <button
                        key={button.name}
                        onClick={() => handleCategoryClick(button.id)}
                        className='flex items-center justify-center py-1 text-sm font-light gap-3 px-5 bg-slate-50 border border-gray-300 rounded-full shadow-lg hover:bg-slate-300 transition-all duration-400'
                    >
                        <img className='h-[20px] w-[20px]' src={button.img} alt={button.name} />
                        <span className='text-[12px] font-semibold'>{button.name}</span>
                    </button>
                ))}
            </div>

            <div className='flex gap-4 mx-10 my-10'>
                <button  className='flex items-center justify-center h-[50px] w-[50px] rounded-sm shadow-xl hover:bg-gray-400 transition-all duration-500'>
                    <img
                    className='' src={translate} alt="Translate" />
                </button>
            </div>

            <MapTypeModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSelectMapType={handleMapTypeSelect}
                buttonRef={mapTypeButtonRef}
            />
             <ChatAIFloater chatOpen={chatOpen} userLocation={userLocation} riskNotification={riskNotification}/>
             
        </div>
    );
};

export default MapFooter
