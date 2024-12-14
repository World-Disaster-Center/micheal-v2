import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoMichael from '../../assets/logoMichael.png';

const StartingPage = () => {
  
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          navigate('/welcome');
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="bg-michael_red_100 h-[100vh] flex flex-col justify-between">
   
    <div className="flex flex-col items-center justify-center gap-10 flex-grow">
      <img src={logoMichael} alt="Logo Michael" className="w-[8%]" />
      <div className="w-[20%] h-2 border border-michael_gray_2 rounded-lg">
        <div
          className="h-full rounded-lg bg-gray-300 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  
    <p className="text-center text-[12px] lg:text-[16px] text-white/50 mb-5">
      Powered by <br /> World Disaster Center
    </p>

  </div>
  );
};

export default StartingPage;