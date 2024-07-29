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
    cleanAnimals(state) {
      state.length = 0;
    },
  },
});

export const { animalAdded, animalRemove, cleanAnimals } = animalSlice.actions;

export const allAnimals = (state: { animals: Animal[] }) => state.animals;

export default animalSlice.reducer;
