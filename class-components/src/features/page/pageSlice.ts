import { createSlice, Dispatch } from '@reduxjs/toolkit';

export const PageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = PageSlice.actions;

export const setCurrentPageAsync = (page: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(setCurrentPage(page));
  }, 0);
};

export const selectCount = (state: { page: { value: number } }) => state.page.value;

export default PageSlice.reducer;
