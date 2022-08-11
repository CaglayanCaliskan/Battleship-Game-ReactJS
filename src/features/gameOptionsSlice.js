import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  rotate: false,
};

export const gameOptions = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setRotate: (state) => {
      state.rotate = !state.rotate;
    },
  },
});

export const {setRotate} = gameOptions.actions;
export default gameOptions.reducer;
