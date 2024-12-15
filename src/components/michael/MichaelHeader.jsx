import React from 'react'

const MichaelHeader = () => {
   return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 w-full z-[999]">
      <div className="text-xl font-bold">My Map App</div>
      <div className="space-x-4">
        <button className="p-2 bg-blue-500 text-white rounded">Menu</button>
        <button className="p-2 bg-green-500 text-white rounded">Profile</button>
      </div>
    </div>
  );
}

export default MichaelHeader