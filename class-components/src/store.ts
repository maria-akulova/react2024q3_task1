import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/features/counter/counterSlice';
import pageReducer from 'src/features/page/pageSlice';
import animalReducer from 'src/features/animals/animalSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    animals: animalReducer,
  },
});
