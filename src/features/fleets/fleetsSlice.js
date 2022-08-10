import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fleet: [
    {id: 1, name: 'destroyer', size: 2},
    {id: 2, name: 'submarine', size: 3},
    {id: 3, name: 'torpedo', size: 3},
    {id: 4, name: 'fastnavy', size: 4},
    {id: 5, name: 'container', size: 5},
  ],
};

export const fleetsSlice = createSlice({
  name: 'fleets',
  initialState,
  reducers: {},
});

export const {} = fleetsSlice.actions;
export default fleetsSlice.reducer;
