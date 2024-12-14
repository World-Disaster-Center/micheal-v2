import { TOGGLE_THEME } from '../actions/themeAction.js';

const initialState = {
  theme: 'light', // Default theme
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (state.theme === "dark"){
        document.documentElement.classList.remove("dark");
      }else{
        document.documentElement.classList.add("dark");
      }
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;
