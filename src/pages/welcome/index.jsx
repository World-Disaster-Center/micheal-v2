import React from 'react';
import michaelLogo from '../../assets/michaelicon.png';
import bgImage from '../../assets/welcomeImg.jpeg';
import Footer1 from '../../components/footer/footer1';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

  const navigate = useNavigate();

  return (
    <section className='h-[100vh]'>
      <div  className="relative bg-cover bg-center h-[80vh]"
     style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute inset-0 bg-michael_dark_red_50'>

        <div className='flex gap-2 items-center pl-7 lg:pl-28 pt-4'>
          <img src={michaelLogo} alt="Logo" className='w-5 lg:w-8' />
          <p className='text-[13px] lg:text-[20px] text-white'>Michael</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[80vh] lg:h-[80vh] text-center gap-3 lg:gap-7">
          <h1 className="text-white font-black text-2xl lg:text-6xl">
            Hello! <br />
           <span className="text-xl lg:text-4xl">Welcome to Michael</span>
          </h1>
          <p className="w-[90%] lg:w-[50%] p-3 lg:p-5 border border-michael_red_100 rounded-xl text-[11px] lg:text-[14px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
         <button onClick={() => navigate('/language')} className="text-white bg-michael_red_100 w-[20%] lg:w-[11%] hover:bg-michael_red_50  hover:text-michael_gray_2 rounded-3xl p-1 text-[15px] lg:text-[20px]">Start</button>

         <div className='flex gap-6 mt-5 lg:mt-8'>
          <div className='border border-michael_gray_4 h-1 p-[2px] lg:p-[3px] rounded-xl w-[100px] bg-michael_gray_4'></div>
          <div className='border border-michael_gray_4 h-1 p-[2px] lg:p-[3px] rounded-xl w-[100px]'></div>
         </div>
       </div>

      </div>
    </div>
    <Footer1 />
    </section>
    
  )
}

export default WelcomePage;