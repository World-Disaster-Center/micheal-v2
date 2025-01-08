import { useState } from 'react';
import { BiBell, BiHelpCircle, BiHome, BiUser, BiUserCircle } from 'react-icons/bi';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { LuLayoutDashboard } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import michaelicon from '../../assets/michaelicon.png';

export default function Container({children}) {
    return (
        <div className='w-full flex  h-full'>
            <Sidebar  />
            <div className='w-full ml-[250px]'>
            {children}
            </div>
        </div>
    )
}


const Sidebar = ({addNewVideo, setAddNewVideo}) => {
    return (
         <aside className="w-64 fixed h-screen left-0 bg-white border-r p-4">
         {/* Logo */}
         <div className="mb-8">
         <img className='h-[47px] w-[47px] cursor-pointer hover:shadow-2xl transition-all duration-500' src={michaelicon} alt='' />
         </div>
 
         {/* Main Navigation */}
         <nav className="space-y-2">
           <Link to='/map' className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <BiHome size={20} />
             <span>Home</span>
           </Link>
           <Link to='/videos' className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
             <BsCollectionPlayFill size={20} />
             <span>Videos</span>
           </Link>
           <Link to='/michael' className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <BiUser size={20} />
             <span>Michael</span>
           </Link>
           <Link to='/dashboard' className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <LuLayoutDashboard size={20} />
             <span>Dashboard</span>
           </Link>
           <Link to='/notifications' className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <BiBell size={20} />
             <span>Notifications</span>
           </Link>
         </nav>
 
         {/* Bottom Navigation */}
         <nav className="absolute bottom-8 space-y-2">
           <Link href="/profile" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <BiUserCircle size={20} />
             <span>Profile</span>
           </Link>
           <Link href="/settings" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <CiSettings size={20} />
             <span>Setting</span>
           </Link>
           <Link href="/about" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
             <BiHelpCircle size={20} />
             <span>About</span>
           </Link>
         </nav>
       </aside>
    )
}