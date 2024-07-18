import { configureStore } from '@reduxjs/toolkit';

import sideReducer from './reducers/sideLocation';
import searchRedcer from './reducers/search';
import restauranReducer from './reducers/Restoaran';
export const store = configureStore({
    reducer: {
        sidebar: sideReducer,
        search : searchRedcer,
        restauran : restauranReducer
    },
  });
  
  export default store;