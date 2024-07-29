import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    cleanCounter: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, cleanCounter } = counterSlice.actions;

export const selectCount = (state: { counter: { value: number } }) => state.counter.value;

export default counterSlice.reducer;
