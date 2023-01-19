import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFindFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFindFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
