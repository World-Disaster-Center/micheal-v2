import React from 'react';

function Footer1() {
  return (
    <div className='bg-white py-1 px-4 lg:px-8 flex flex-col lg:flex-row justify-between  mt-3'>
      <div className='w-[100%] text-center lg:text-left lg:w-[50%] border border-transparent lg:border-r-[#00000040]'>
        <h2 className='text-sm lg:text-[16px] text-michael_gray_3'>About</h2>
        <p className=' text-michael_gray_4 mt-3 text-[12px] lg:text-[14px] w-[100%] lg:w-[60%]'>
        Michael is an advanced disaster management platform by the World Disaster Center, leveraging AI, Big Data, and geospatial intelligence to provide real-time insights,
         early warnings, and recovery solutions. It empowers communities, responders, and decision-makers to prepare, respond, and recover effectively from disasters.</p>
      </div>
      <hr className='border border-michael_gray_2 mt-2 w-[60%] mx-auto lg:hidden' />
      <div className='self-end pl-3 lg:pl-32 text-center lg:text-left my-4 lg:my-0'>
        <p className='text-michael_gray_1 text-[13px] lg:text-[15px]'><span className='text-michael_gray_3 font-medium'>Email</span>:office@worlddisastercenter.org</p>
        <p className='text-michael_gray_1 text-[11px] lg:text-[15px] mt-2'>©World Disaster Center / Michael  2024. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer1