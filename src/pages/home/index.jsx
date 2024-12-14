import React, { useState } from 'react';
import Navbar1 from '../../components/navbar/navbar1';
import bgImage from '../../assets/welcomeImg.jpeg';
import { AiFillApple } from "react-icons/ai";
import { TiVendorAndroid } from "react-icons/ti";
import natural from '../../assets/natural1.png';
import demonstr from '../../assets/demonst1.png';
import drought from '../../assets/drought1.png';
import earth from '../../assets/earthquake1.png';
import flood from '../../assets/flood1.png';
import politic from '../../assets/politic1.png';
import tech from '../../assets/tech1.png';
import strat from '../../assets/strat1.png';
import cyclone from '../../assets/cyclone1.png';
import naturalImage from '../../assets/naturalImage.png';
import demonstrImage from '../../assets/demonsImage.png';
import droughtImage from '../../assets/droughtImage.png';
import floodImage from '../../assets/floodImage.png';
import earthImage from '../../assets/earthImage.png';
import politicImage from '../../assets/politicImage.png';
import techImage from '../../assets/techImage.png';
import stratImage from '../../assets/stratImage.png';
import cycloneImage from '../../assets/cycloneImage.png';
import naturalIcon from '../../assets/naturalIcon.png';
import demonstrIcon from '../../assets/demonsIcon.png';
import droughtIcon from '../../assets/droughtIcon.png';
import floodIcon from '../../assets/floodIcon.png';
import earthIcon from '../../assets/earthIcon.png';
import politicIcon from '../../assets/politicIcon.png';
import techIcon from '../../assets/techIcon.png';
import stratIcon from '../../assets/stratIcon.png';
import cycloneIcon from '../../assets/cycloneIcon.png';
import News from '../../components/news';

import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categoriesData = [
  { name: "All", icon: null },
  { name: "Natural", icon: natural },
  { name: "Flood", icon: flood },
  { name: "Demonstrations", icon: demonstr },
  { name: "Drought", icon: drought },
  { name: "Earthquake", icon: earth },
  { name: "Political violence", icon: politic },
  { name: "Strategic developments", icon: strat },
  { name: "Technological", icon: tech },
  { name: "Tropical Cyclone THREE-24", icon: cyclone },
];

const cardData = [
  { id: 1, category: "Natural", title: "Lorem ipsum dolor", pic: naturalImage, icon: naturalIcon },
  { id: 2, category: "Flood", title: "Lorem ipsum dolor", pic: floodImage, icon: floodIcon },
  { id: 3, category: "Demonstrations", title: "Lorem ipsum dolor", pic: demonstrImage, icon: demonstrIcon },
  { id: 4, category: "Drought", title: "Lorem ipsum dolor", pic: droughtImage, icon: droughtIcon },
  { id: 5, category: "Earthquake", title: "Lorem ipsum dolor", pic: earthImage, icon: earthIcon },
  { id: 6, category: "Political violence", title: "Lorem ipsum dolor", pic:politicImage, icon: politicIcon },
  { id: 7, category: "Strategic developments", title: "Lorem ipsum dolor", pic: stratImage, icon: stratIcon },
  { id: 8, category: "Technological", title: "Lorem ipsum dolor", pic: techImage, icon: techIcon },
  { id: 9, category: "Tropical Cyclone THREE-24", title: "Lorem ipsum dolor", pic: cycloneImage, icon: cycloneIcon },
  { id: 10, category: "Flood", title: "Lorem ipsum dolor", pic: floodImage, icon: floodIcon },
  { id: 11, category: "Tropical Cyclone THREE-24", title: "Lorem ipsum dolor", pic: cycloneImage, icon: cycloneIcon },
  { id: 12, category: "Drought", title: "Lorem ipsum dolor", pic: droughtImage, icon: droughtIcon },
  { id: 13, category: "Technological", title: "Lorem ipsum dolor", pic: techImage, icon: techIcon },
  { id: 14, category: "Earthquake", title: "Lorem ipsum dolor", pic: earthImage, icon: earthIcon },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCards =
    activeCategory === "All"
      ? cardData
      : cardData.filter((card) => card.category === activeCategory);

  const maxCardsPerPage = 10;
  const displayedCards = filteredCards.slice(
    currentIndex,
    currentIndex + maxCardsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex + maxCardsPerPage < filteredCards.length) {
      setCurrentIndex(currentIndex + maxCardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - maxCardsPerPage >= 0) {
      setCurrentIndex(currentIndex - maxCardsPerPage);
    }
  };

  return (
    <section>
      <div
        className="relative bg-cover bg-center h-[100vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-michael_dark_red_50">
          <Navbar1 />
          <div className="flex flex-col justify-center text-center items-center h-[80vh] gap-6 lg:gap-8">
            <h1 className="font-black text-white text-4xl lg:text-6xl">Disaster Change</h1>
            <p className="w-[90%] lg:w-[60%] text-white text-[12px] lg:text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
               non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr className="border border-white/50 w-[70%] lg:w-[40%]" />
            <button className="py-3 px-4 uppercase text-white bg-white/50 font-semibold text-[12px] lg:text-[13px]">
              Download Now
            </button>
            <div className="flex gap-4">
              <button className="bg-white py-2 px-3 flex items-center text-michael_black_1 gap-1 font-semibold rounded-3xl text-[12px] lg:text-[13px] hover:text-michael_red_50">
                <TiVendorAndroid className="text-xl" />
                Download App
              </button>
              <button className="bg-michael_red_100 py-2 px-3 flex items-center text-white gap-1 font-semibold rounded-3xl text-[12px] lg:text-[13px] hover:text-michael_gray_2">
                <AiFillApple className="text-xl" />
                Download iOS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-center py-3 lg:py-10 px-2 lg:px-16 bg-white justify-center">
        <h2 className="text-[16px] font-bold text-michael_gray_3">
          Disaster Alert
        </h2>
        <LiaGripLinesVerticalSolid className="hidden lg:flex text-black/40 text-lg" />
        <div className="flex flex-wrap text-center justify-center lg:flex gap-3 lg:gap-5 py-2 px-2 lg:px-3 bg-michael_gray_6 rounded-3xl">
          {categoriesData.map(({ name, icon }) => (
            <button
              key={name}
              className={`text-[7px] lg:text-[9px] py-1 px-2 rounded-3xl flex gap-1 items-center ${
                activeCategory === name
                  ? "bg-white text-black"
                  : "text-michael_gray_3"
              }`}
              onClick={() => handleCategoryChange(name)}
            >
              {icon && <img src={icon} alt={name} className="w-[11px] lg:w-[13px] h-[12px] lg:h-[14px]" />}
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-michael_bg gap-2 px-1 lg:px-10 py-4 lg:py-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FiChevronLeft className='text-michael_gray_2 text-8xl hidden lg:flex' />
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-12 justify-center">
          {displayedCards.map(({ id, title, pic, icon }) => (
            <div
              key={id}
              className="rounded-3xl shadow-md h-[280px] lg:h-[270px] w-[100%] lg:w-[110%] bg-white"
            >
              <img src={pic} alt="pic" className=' w-[300px] lg:w-full mt-3 lg:mt-2 h-[200px] lg:h-[180px]' />
              <div className='flex items-center justify-between lg:justify-normal px-4 lg:px-2'>
                <div className='flex flex-col'>
                  <p className='text-[13px] font-semibold text-michael_gray_3'>{title} </p>
                  <p className='text-[11px] text-michael_gray_3'>Lorem ipsum dolor sit amet </p>
                </div>
           