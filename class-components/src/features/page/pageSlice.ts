import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Animal } from 'src/components';
import { store } from 'src/store';

export interface PageProps {
  page: number;
  animals: Animal[];
}

const initialState: PageProps[] = [];

export const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    addAllAnimals(state, action: PayloadAction<PageProps>) {
      const existingPage = state.find((p) => p.page === action.payload.page);

      if (existingPage) {
        existingPage.animals = action.payload.animals;
      } else {
        state.push({ page: action.payload.page, animals: action.payload.animals });
      }
    },
  },
});

export const { addAllAnimals } = PageSlice.actions;

export const selectPage = createSelector(
  [
    (state: ReturnType<typeof store.getState>) => state.page,
    (_: ReturnType<typeof store.getState>, value: number) => value,
  ],
  (pages, value) => {
    const page = pages.find((p) => p.page === value);
    return page ? page.animals : [];
  },
);

export default PageSlice.reducer;
