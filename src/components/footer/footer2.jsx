import React from 'react';
import { CiMail } from "react-icons/ci";

function Footer2() {
  return (
    <div className='bg-michael_gray_2 p-5 lg:p-24'>
      <div className='grid grid-cols-1 lg:flex gap-8 lg:gap-28 justify-center'>
        <div className='flex w-full lg:w-[27%] flex-col gap-2'>
          <h1 className='text-[14px] lg:text-[18px] text-michael_black_1 font-semibold'>About</h1>
          <p className='text-[12px] lg:text-lg text-michael_gray_1 my-0 lg:my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <p className='text-[12px] lg:text-[16px] text-michael_black_2'><span className='text-michael_black_1 font-semibold'>Email:</span>info@loremipsum.com</p>
          <p className='text-[12px] lg:text-[16px] font-semibold text-michael_black_1'>Phone:00000000000000</p>
        </div>
        <div className='flex justify-between lg:justify-start px-7 lg:px-0 gap-0 lg:gap-28'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[14px] lg:text-[18px] text-michael_black_1 font-semibold'>Quick Links</h1>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2 mt-2' href="/home">Home</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">About</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[14px] lg:text-[18px] text-michael_black_1 font-semibold'>Category</h1>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2 mt-2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
          <a className='text-[12px] lg:text-[16px] text-michael_black_2' href="#">Lorem</a>
        </div>
        </div>
        
        <div className='bg-white rounded-lg px-3 py-4 mb-3 flex flex-col gap-2 text-center '>
          <h1 className='text-[16px] lg:text-[20px] text-michael_black_1 font-semibold'>Weekly Newsletter</h1>
          <p className='text-michael_gray_1 text-[12px] lg:text-[16px]'>Get blog articles and offers via email</p>
          <div className=' border border-[#DCDDDF] p-2 mt-2 rounded-md flex justify-around lg:justify-between'>
            <input type="email" placeholder='Your Email' className='outline-none placeholder:text-[12px] lg:placeholder:text-[16px]' />
            <CiMail className='text-michael_gray_1 text-xl' />
          </div>
          <button className='text-michael_black_1 font-bold text-[14px] lg:text-[20px] bg-michael_red_20 p-2 rounded-md'>Subscribe</button>
        </div>
      </div>
      <hr className='border border-black/25 w-[95%] mt-5 lg:mt-16 mx-auto' />
      <p className='text-[12px] lg:text-[16px] mt-5 text-center text-michael_black_2'>©World Disaster Center / Michael  2024. All Rights Reserved.</p>
    </div>
  )
}

export default Footer2;