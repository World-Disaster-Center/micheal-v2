// redux/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import apiPredictionSlice from '../slice/prediction';
import themeSlice from '../slice/theme';
import disasterSlice from '../slice/disasters';

const store = configureStore({
  reducer: {
    api: apiPredictionSlice,
    theme: themeSlice,
    disasters: disasterSlice,
  },
});

export default store;
