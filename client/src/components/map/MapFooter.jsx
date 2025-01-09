import React, { useState, useRef, useEffect } from 'react';
import { fetchDisastersByCategory } from '../../redux/services/disasters';
import MapTypeModal from './MapTypeModal';
import { useDispatch } from 'react-redux';
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


const conflictData = [
    {
        id: 'armed-conflict',
        name: 'Armed Conflicts',
        description: 'Active armed conflicts and war zones',
        incidents: [
            {
                id: 1,
                title: 'Regional Conflict A',
                location: { lat: 31.5204, lng: 34.4667 },
                severity: 'high',
                type: 'armed-conflict',
                affectedArea: '150km radius',
                date: '2024-01-15'
            },
            {
                id: 2,
                title: 'Civil Unrest B',
                location: { lat: 33.8869, lng: 35.5131 },
                severity: 'medium',
                type: 'civil-unrest',
                affectedArea: '50km radius',
                date: '2024-01-20'
            }
        ]
    },
    {
        id: 'civil-unrest',
        name: 'Civil Unrest',
        description: 'Areas experiencing civil protests and unrest',
        incidents: [
            {
                id: 3,
                title: 'Urban Protests',
                location: { lat: 30.0444, lng: 31.2357 },
                severity: 'medium',
                type: 'civil-unrest',
                affectedArea: '20km radius',
                date: '2024-01-18'
            }
        ]
    },
    {
        id: 'political-crisis',
        name: 'Political Crisis',
        description: 'Regions under political instability',
        incidents: [
            {
                id: 4,
                title: 'Government Instability',
                location: { lat: 15.3694, lng: 44.1910 },
                severity: 'high',
                type: 'political-crisis',
                affectedArea: '100km radius',
                date: '2024-01-22'
            }
        ]
    }
];

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
        name: "Conflicts",
        img: politicalIcon,
        id: "conflicts",
        subCategories: conflictData,
        incidents: conflictData.reduce((acc, category) => [...acc, ...category.incidents], [])
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
];




const MapFooter = ({ onMapTypeChange, onCategorySelect }) => {
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
        if (categoryId === 'conflicts') {
          const conflictButton = buttonDisasters.find(b => b.id === 'conflicts');
          // Pass the incidents data up to the parent
          onCategorySelect({ type: 'conflicts', data: conflictButton.incidents });
        } else if (categoryId) {
          onCategorySelect({ type: 'api', categoryId });
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
