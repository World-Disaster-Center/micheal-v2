import React, { useState } from 'react';
import Footer1 from '../../components/footer/footer1';
import bgImage from '../../assets/languageImage.jpeg';
import { IoChevronDown } from "react-icons/io5";
import michaelLogo from '../../assets/newlogo.png';
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  // { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  // { code: 'fr', name: 'French', flag: '🇫🇷' },
  // { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  // { code: 'de', name: 'German', flag: '🇩🇪' },
  // { code: 'it', name: 'Italian', flag: '🇮🇹' },
  // { code: 'jp', name: 'Japanese', flag: '🇯🇵' },
  // { code: 'cn', name: 'Chinese', flag: '🇨🇳' },
  // { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  // { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  // { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  // { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  // { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  // { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  // { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  // { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  // { code: 'el', name: 'Greek', flag: '🇬🇷' },
  // { code: 'th', name: 'Thai', flag: '🇹🇭' },
  // { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  // { code: 'no', name: 'Norwegian', flag: '🇳🇴' },
  // { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
  // { code: 'he', name: 'Hebrew', flag: '🇮🇱' },
  // { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  // { code: 'ms', name: 'Malay', flag: '🇲🇾' },
  // { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
  // { code: 'cz', name: 'Czech', flag: '🇨🇿' },
  // { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
  // { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
  // { code: 'da', name: 'Danish', flag: '🇩🇰' },
  // { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
]

function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const navigate = useNavigate();

  return (
    <section className="h-[100vh]">
  
      <div className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: `url(${bgImage})` }}>

        <div className="absolute inset-0 bg-michael_dark_red_75 ">

        <div className='flex gap-2 items-center pl-7 lg:pl-28 pt-4'>
          <img src={michaelLogo} alt="Logo" className='w-20 lg:w-28' />
         
        </div>

        <div className='flex flex-col items-center justify-center h-[90vh]'>
        <h2 className="text-[20px] lg:text-[24px] font-medium text-white mb-6">Select Language</h2>
          <div className="relative w-[60%] lg:w-[23%]">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center text-sm lg:text-lg gap-5 lg:gap-10 text-center px-4 py-1 lg:py-2 border border-michael_gray_4 bg-michael_gray_4/50 text-white rounded-3xl shadow cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-lg lg:text-xl">{selectedLanguage.flag}</span>
                <span>{selectedLanguage.name}</span>
              </div>
              <IoChevronDown className="w-5 h-5 text-white" />
            </div>

            {isOpen && (
              <div className="absolute z-10 mt-2 bg-white rounded-lg h-52 w-full overflow-auto">
                <div className='flex justify-between border items-center bg-michael_gray_2 m-2 lg:m-3 rounded-3xl'>
                <input
                  type="text"
                  placeholder="Search language"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className=" w-[93%] py-1 px-3  placeholder:text-[14px] bg-michael_gray_2 rounded-3xl focus:outline-none"
                />
                <IoSearchSharp className='text-xl mr-3 text-michael_gray_3' />
                </div>
               
                <div className="flex flex-col justify-center text-center mx-auto gap-1 px-2 lg:px-8 py-2">
                  {filteredLanguages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className="flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <span className="text-lg lg:text-xl">{lang.flag}</span>
                      <span className="text-michael_gray_5 text-[11px] lg:text-[13px]">{lang.name}</span>
                    </div>
                  ))}
                  <p className='text-michael_gray_2 text-[12px] lg:text-[14px]'>Other languages coming soon...</p>
                </div>
              </div>
            )}
          </div>
          <div className='mt-6 lg:mt-16 w-[60%] lg:w-[23%] flex justify-between'>
            <button onClick={() => navigate('/welcome')} className='flex text-sm lg:text-lg gap-1 flex-col items-center text-white font-medium'> <FaAngleLeft className='border border-white rounded-full p-2 text-3xl lg:text-4xl' /> Prev</button>
            <button onClick={() => navigate('/home')} className='flex text-sm lg:text-lg gap-1 flex-col items-center text-white font-medium'><FaAngleRight className='border border-white bg-white text-michael_dark_red_75 rounded-full p-2 text-3xl lg:text-4xl' /> Next</button>
          </div>

          <div className='flex gap-6 mt-10 lg:mt-28'>
            <div className='border border-michael_gray_4 h-1 p-[2px] lg:p-[3px] rounded-xl w-[100px]'></div>
            <div className='border border-michael_gray_4 h-1 p-[2px] lg:p-[3px] rounded-xl w-[100px]  bg-michael_gray_4'></div>
         </div>
        </div>
          
        </div>
      </div>
      <Footer1 />
    </section>
  );
}

export default Language;
