import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/actions/themeAction.js';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex items-center justify-between px-4 py-2 rounded-lg shadow-md ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
      }`}
    >
      <p>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="flex items-center justify-center p-2 rounded-full focus:outline-none"
      >
        {theme === 'light' ? (
          <FaSun className="text-yellow-300 w-6 h-6" />
        ) : (
          <FaMoon className="text-blue-300 w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

