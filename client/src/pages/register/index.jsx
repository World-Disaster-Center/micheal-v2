import React from 'react';
import bgImage from '../../assets/welcomeImg.jpeg';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

  return (
    <div className='h-[100vh] flex'>

      <div className="relative bg-cover bg-center w-[50%]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='absolute flex justify-center items-center inset-0 bg-michael_dark_red_75'>
          <p className='uppercase text-4xl font-bold text-white text-center'>welcome to <br /> <span className='text-michael_red_100'>World Disaster Center!</span></p>
        </div>
      </div>

      <div className='bg-white w-[50%] p-28 flex flex-col gap-3 justify-center'>
        <h1 className='font-bold text-3xl text-michael_red_100'>Register</h1>
        <p className='text-michael_gray_5 text-[15px]'>Please enter your details to register</p>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
          <label htmlFor="" className='text-michael_black_2 text-[15px]'>First Name</label>
          <input type="text" placeholder='First Name' required className='border border-michael_red_50 placeholder:text-[13px] text-michael_red_50 placeholder:text-michael_gray_4 p-2 rounded-lg outline-none' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='text-michael_black_2 text-[15px]'>Last Name</label>
            <input type="text" placeholder='Last Name' required className='border border-michael_red_50 placeholder:text-[13px] text-michael_red_50 placeholder:text-michael_gray_4 p-2 rounded-lg outline-none' />
          </div>
           </div>
           <div className='flex flex-col gap-1 mt-2'>
            <label htmlFor="" className='text-michael_black_2 text-[15px]'>Email Address</label>
            <input type="email" placeholder='Email Address' required  className='border border-michael_red_50 placeholder:text-[13px] text-michael_red_50 placeholder:text-michael_gray_4 p-2 rounded-lg outline-none'/>
           </div>
           <div className='flex flex-col gap-1 mt-2'>
            <label htmlFor="" className='text-michael_black_2 text-[15px]'>Password</label>
            <input type="text" placeholder='Password' required className='border border-michael_red_50 placeholder:text-[13px] text-michael_red_50 placeholder:text-michael_gray_4 p-2 rounded-lg outline-none'/>
           </div>
        <button className='text-white text-[15px] font-semibold p-2 rounded-lg bg-michael_red_100 border border-michael_red_100 hover:text-michael_red_100 hover:bg-white'>Register</button>
        <p className='text-[14px] text-michael_black_1 text-center'>Already have an account? <span className='text-michael_red_100 cursor-pointer hover:underline' onClick={() => navigate('/signin')}>Login</span></p>
        <div className='flex justify-center mt-3 items-center gap-4'>
          <hr className='border-spacing-0 border-michael_gray_2 w-[20%]' />
          <p className='text-[13px] text-michael_gray_1'>Or register with</p>
          <hr className='border-spacing-0 border-michael_gray_2 w-[20%]' />
        </div>
        <button className='flex items-center border border-michael_gray_4 justify-center mt-2 gap-2 p-2 rounded-lg'>
        <FcGoogle />
        <span className='text-[16px] text-michael_black_2'>Google</span>
        </button>
      </div>

    </div>
  )
}

export default Register;