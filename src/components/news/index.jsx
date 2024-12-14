import React from 'react';
import post1 from '../../assets/post1.png';
import post2 from '../../assets/post2.png';
import post3 from '../../assets/post3.png';
import post4 from '../../assets/post4.png';
import post5 from '../../assets/post5.png';
import post6 from '../../assets/post6.png';
import post7 from '../../assets/post7.png';
import post8 from '../../assets/post8.png';
import post9 from '../../assets/post9.png';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';
import { IoHeart } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import Footer2 from '../footer/footer2';
import { useNavigate } from 'react-router-dom';

const postData = [
  { image: post1, icon: user1, name: "Tracey Wilson" },
  { image: post2, icon: user2, name: "Jason Francisco"  },
  { image: post3, icon: user3, name: "Elizabeth Slavin"  },
  { image: post4, icon: user4, name: "Ernie Smith"  },
  { image: post5, icon: user5, name: "Eric Smith"  },
  { image: post6, icon: user1, name: "Tracey Wilson"  },
  { image: post7, icon: user2, name: "Jason Francisco"  },
  { image: post8, icon: user3, name: "Elizabeth Slavin"  },
  { image: post9, icon: user4, name: "Ernie Smith"  },
];

function News() {

  const navigate = useNavigate();

  return (
    <section className='bg-michael_bg'>
      <div className='flex flex-col lg:flex-row gap-9 justify-center w-[80%] lg:w-[70%] pt-8 lg:pt-16 mx-auto'>
        <div className='flex flex-col gap-1 '>
          <h1 className='text-[20px] lg:text-[24px] text-michael_red_100 font-semibold'>News</h1>
          <h2 className='text-[11px] lg:text-[13px] text-michael_red_50'>Lorem ipsum dolor sit amet </h2>
          <p className='text-michael_black_3 text-[12px] lg:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='flex flex-col border border-michael_red_100 p-5 rounded-xl'>
              <h3 className='text-[13px] text-michael_black_1 font-semibold'>Lorem ipsum notice alert</h3>
              <p className='text-[12px] text-michael_black_3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex 
                 ea commodo consequat.Duis aute irure dolor in.</p>
            </div>
        </div>
        <div>
          <p className='text-4xl lg:text-6xl font-bold text-white bg-michael_red_100 px-16 py-28 text-center'>DISASTER CHANGE</p>
          <p className='text-[12px] lg:text-[14px] text-michael_gray_3'>Lorem ipsum dolor sit arem Lorem ipsum dolor sit arem ... <span className='text-michael_red_50'>Plus</span></p>
        </div>
      </div>
      <button className='text-white bg-michael_red_100 py-2 px-4 font-semibold flex justify-center mt-10 mx-auto rounded-3xl text-[13px] lg:text-[15px]'>Faire un don</button>
      
      <hr className='mx-auto border border-black/25 my-10 w-[80%]' />

      <div>
        <h1 className='text-[17px] lg:text-3xl font-bold text-center'>Lorem ipsum dolor sit arem</h1>
        <div className='px-7 lg:px-28 py-5'>
          <h2 className='text-[13px] lg:text-2xl font-bold'>Latest Post</h2>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center mt-3'>
          {postData.map(({ image, icon, name}) => (
            <div 
            className='bg-white p-3 rounded-lg cursor-pointer'
            onClick={() => navigate(`/blog`)}>
               <img src={image} alt="pic" className='w-full' />
              <div className='flex flex-col gap-3 mt-5'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-michael_red_100 font-semibold text-[12px] lg:text-[14px] p-1 bg-michael_red_10 rounded-md'>Lorem ipsun</h2>
                  <div className='flex gap-3 items-center'>
                  <IoHeart className='text-michael_red_100 text-[20px] lg:text-2xl' />
                  <FaRegComment className='text-lg lg:text-xl' />
                  <BsSend className='text-lg lg:text-xl' />
                  <CiBookmark className='text-lg lg:text-xl' />
                  </div>
                </div>
                <p className='text-[18px] lg:text-2xl font-semibold'>Lorem ipsum sit arem dolor lorem ipsum arem</p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <img src={icon} alt="icon" className='w-[30px] h-[30px]' />
                    <h3 className='text-michael_gray_7 text-[13px] lg:text-[15px]'>{name}</h3>
                  </div>
                  <p className='text-michael_gray_7 text-[13px] lg:text-[15px]'>August 20, 2025</p>
                </div>
              </div>
            </div> 
              ))}
            </div>

            <button className='mt-10 text-michael_red_100 text-[13px] lg:text-[15px] p-3 border border-michael_red_100 rounded-xl flex mx-auto justify-center'>View All Posts</button>
          
        </div>
      </div>
      <Footer2 />
    </section>
  )
}

export default News