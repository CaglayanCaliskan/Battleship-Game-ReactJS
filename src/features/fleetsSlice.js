import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  playerFleet: [
    {
      id: 1,
      name: 'destroyer',
      size: 2,
      selected: false,
      setAvailable: false,
      onBoard: false,
    },
    {
      id: 2,
      name: 'submarine',
      size: 3,
      selected: false,
      setAvailable: false,
      onBoard: false,
    },
    {
      id: 3,
      name: 'torpedo',
      size: 3,
      selected: false,
      setAvailable: false,
      onBoard: false,
    },
    {
      id: 4,
      name: 'fastnavy',
      size: 4,
      selected: false,
      setAvailable: false,
      onBoard: false,
    },
    {
      id: 5,
      name: 'container',
      size: 5,
      selected: false,
      setAvailable: false,
      onBoard: false,
    },
  ],
  targetBoxes: [],
};

export const fleetsSlice = createSlice({
  name: 'fleets',
  initialState,
  reducers: {
    dragShip: (state, action) => {
      state.playerFleet.map((ship) => {
        ship.selected = false;
        ship.id === action.payload.id ? (ship.selected = true) : ship;
      });
    },
    dropAvailable: (state, action) => {
      state.playerFleet.map((ship) => {
        ship.selected === true
          ? (ship.setAvailable = action.payload.drop)
          : ship;
      });
      //set state
      state.targetBoxes = action.payload.availableGreenBox;
    },
    dropShip: (state, action) => {
      const boxes = document.querySelectorAll('.box');
      state.targetBoxes.map((target, index) => {
        boxes.forEach((box) => {
          if (box.parentElement.parentElement.id === 'Playerboard') {
            if (
              Number(box.id) === Number(target.number) &&
              box.parentElement.id.toLowerCase() === target.name
            ) {
              box.classList.add('bg-green-600');
              box.setAttribute('data', action.payload.name);
            }
          }
        });
      });
      state.playerFleet.map((ship) => {
        ship.selected && ship.setAvailable ? (ship.onBoard = true) : ship;
      });
    },
    resetFleet: (state) => {
      state.playerFleet.map((ship) => (ship.onBoard = false));
      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        box.classList.remove('bg-green-600');
        box.setAttribute('data', undefined);
      });
    },
  },
});

export const {dragShip, dropAvailable, dropShip, resetFleet} =
  fleetsSlice.actions;
export default fleetsSlice.reducer;
