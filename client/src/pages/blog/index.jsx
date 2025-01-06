// import React from 'react';
// import Navbar2 from '../../components/navbar/navbar2';
// import profile from '../../assets/profile.png';
// import techImage from '../../assets/blogImage.png';
// import politicImage from '../../assets/blogImage2.png';
// import Footer2 from '../../components/footer/footer2';
// import { IoHeart } from "react-icons/io5";
// import { FaRegComment } from "react-icons/fa6";
// import { BsSend } from "react-icons/bs";
// import { CiBookmark } from "react-icons/ci";

// function Blog() {
//   return (
//     <div>
//       <Navbar2 />
//       <div className='bg-michael_bg'>
//         <div className=' w-[88%] lg:w-[60%] py-20 lg:py-28 flex justify-center mx-auto flex-col gap-4 lg:gap-7'>
//           <h4 className='bg-michael_red_100 p-1 lg:p-2 text-white rounded-lg w-[30%] lg:w-[14%] text-center text-[12px] lg:text-[14px]'>Technology</h4>
//           <h1 className="font-bold text-2xl lg:text-4xl">The Impact of Technology on the Workplace: How Technology is Changing</h1>
//           <div className='flex justify-between'>
//             <div className='flex items-center gap-3 lg:gap-5'>
//               <div className='flex gap-1 lg:gap-2 items-center'>
//                 <img src={profile} alt="profile" className='w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]' />
//                 <h4 className='text-[10px] lg:text-[14px] text-michael_gray_1'>Tracey Wilson</h4>
//               </div>
//               <h4 className='text-[10px] lg:text-[14px] text-michael_gray_1'>August 20, 2022</h4>
//             </div>

//             <div className='flex gap-2 lg:gap-3 items-center'>
//             <IoHeart className='text-michael_red_100 text-[18px] lg:text-2xl' />
//             <FaRegComment className='text-sm lg:text-xl' />
//             <BsSend className='text-sm lg:text-xl' />
//             <CiBookmark className='text-sm lg:text-xl' />              
//           </div>
//         </div>
//         <img src={techImage} alt="tech" />
//         <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures,
//          and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming,
//          especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
//         <p className="text- michael_black_2 text-[16px] lg:text-[20px]" >One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals,
//            and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
//         <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Research Your Destination</h3>
//         <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
//          Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
//          <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. 
//           Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
//           <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Plan Your Itinerary</h3>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
//           <p className='border-l-4 bg-[#F6F6F7] rounded-md border-[#E8E8EA] text-michael_black_1 text-[18px] lg:text-2xl italic px-2 lg:px-3 py-3 lg:py-5'>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>
//           <img src={politicImage} alt="political violance image" />
//           <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Pack Lightly and Smartly</h3>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
//           <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Stay Safe and Healthy</h3>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
//           <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Immerse Yourself in the Local Culture</h3>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
//           <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Capture Memories</h3>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
//           <h3 className='text-[18px] lg:text-2xl text-michael_black_1 font-semibold'>Conclusion:</h3>
//           <p className="text- michael_black_2 text-[16px] lg:text-[20px]">Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
//         </div>
//       </div>
//       <Footer2 />
//     </div>
//   )
// }

// export default Blog