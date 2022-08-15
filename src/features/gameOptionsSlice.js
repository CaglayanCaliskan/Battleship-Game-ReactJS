import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  rotate: false,
  game: false,
};

export const gameOptions = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setRotate: (state) => {
      state.rotate = !state.rotate;
    },
    setGameStart: (state) => {
      state.game = !state.game;
    },
  },
});

export const {setRotate, setGameStart} = gameOptions.actions;
export default gameOptions.reducer;
