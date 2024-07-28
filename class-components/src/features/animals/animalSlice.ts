import { createSlice } from '@reduxjs/toolkit';
import { Animal } from 'src/components';

const initialState: Animal[] | null = [];

const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    animalAdded(state, action) {
      state.push(action.payload);
    },
    animalRemove(state, action) {
      return state.filter((animal) => animal.uid !== action.payload);
    },
  },
});

export const { animalAdded, animalRemove } = animalSlice.actions;

export default animalSlice.reducer;
