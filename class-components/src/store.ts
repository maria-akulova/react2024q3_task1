import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/features/counter/counterSlice';
import pageReducer from 'src/features/page/pageSlice';
import animalReducer from 'src/features/animals/animalSlice';
import { animalAPI } from './features/api/AnimalAPI';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [animalAPI.reducerPath]: animalAPI.reducer,
    counter: counterReducer,
    page: pageReducer,
    animals: animalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animalAPI.middleware),
});
setupListeners(store.dispatch);
