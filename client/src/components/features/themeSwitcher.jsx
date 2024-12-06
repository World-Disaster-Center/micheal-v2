import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/actions/themeAction.js';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current Theme: {theme}</p>
      <button className='p-3 bg-green-300' onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
