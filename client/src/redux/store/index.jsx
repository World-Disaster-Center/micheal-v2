import {configureStore} from '@reduxjs/toolkit';
import apiPredictionSlice from '../slice/prediction/index';
import themeSlice from '../slice/theme/index';

const store = configureStore({
    reducer: {
      prediction: apiPredictionSlice,
      theme: themeSlice,
    },
  });
  
  export default store;