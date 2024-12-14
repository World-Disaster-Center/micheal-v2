import { combineReducers } from 'redux';
import themeReducer from './themeReducer.js';

const rootReducer = combineReducers({
  theme: themeReducer,
  // other reducers can be added here
});

export default rootReducer;
