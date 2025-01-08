import React from 'react';

const CustomDrawer = ({ isOpen, onClose, title, children, width = 'w-64' }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen ${width} bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-600 font-bold focus:outline-none"
        >
          X
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default CustomDrawer;