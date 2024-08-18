import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from 'src/components';

export interface FormState {
  formData: FormValues[];
}

export const initialState: FormState = {
  formData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: {
      reducer: (state, action: PayloadAction<FormValues>) => {
        state.formData.unshift(action.payload);
      },
      prepare: (data: FormValues) => {
        const id = nanoid();
        return { payload: { id, ...data } };
      },
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
