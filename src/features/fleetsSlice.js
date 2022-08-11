import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  playerFleet: [
    {id: 1, name: 'destroyer', size: 2, selected: false, set: false},
    {id: 2, name: 'submarine', size: 3, selected: false, set: false},
    {id: 3, name: 'torpedo', size: 3, selected: false, set: false},
    {id: 4, name: 'fastnavy', size: 4, selected: false, set: false},
    {id: 5, name: 'container', size: 5, selected: false, set: false},
  ],
};

export const fleetsSlice = createSlice({
  name: 'fleets',
  initialState,
  reducers: {
    dragStart: (state, action) => {
      state.playerFleet.map((ship) => {
        ship.selected = false;
        ship.id === action.payload.id ? (ship.selected = true) : ship;
      });
    },
  },
});

export const {dragStart} = fleetsSlice.actions;
export default fleetsSlice.reducer;
