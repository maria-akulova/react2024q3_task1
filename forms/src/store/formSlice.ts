// src/store/formSlice.ts
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from 'src/components';

export interface FormState {
  uncontrolledFormData: FormValues[];
  controlledFormData: FormValues[];
}

export const initialState: FormState = {
  uncontrolledFormData: [],
  controlledFormData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUncontrolledFormData: {
      reducer: (state, action: PayloadAction<FormValues>) => {
        state.uncontrolledFormData.push(action.payload);
      },
      prepare: (data: FormValues) => {
        const id = nanoid();
        return { payload: { id, ...data } };
      },
    },
    setControlledFormData: {
      reducer: (state, action: PayloadAction<FormValues>) => {
        state.controlledFormData.push(action.payload);
      },
      prepare: (data: FormValues) => {
        const id = nanoid();
        return { payload: { id, ...data } };
      },
    },
  },
});

export const { setUncontrolledFormData, setControlledFormData } = formSlice.actions;

export default formSlice.reducer;
