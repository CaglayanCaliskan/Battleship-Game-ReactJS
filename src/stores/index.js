import {configureStore} from '@reduxjs/toolkit';
import fleetsSlice from '../features/fleetsSlice';
import gameOptionsSlice from '../features/gameOptionsSlice';

const store = configureStore({
  reducer: {
    fleetsSlice,
    gameOptionsSlice,
  },
});

export default store;
