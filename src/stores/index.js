import {configureStore} from '@reduxjs/toolkit';
import fleetsSlice from '../features/fleets/fleetsSlice';
const store = configureStore({
  reducer: {
    fleetsSlice,
  },
});

export default store;
