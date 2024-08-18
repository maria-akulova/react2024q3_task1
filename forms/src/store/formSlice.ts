import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from 'src/components';
import { COUNTRIES } from 'utils/countries.ts';

export interface FormState {
  formData: FormValues[];
  countries: string[];
}

export const initialState: FormState = {
  formData: [],
  countries: COUNTRIES,
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

export const selectCountries = (state: { form: { countries: string[] } }) => state.form.countries;

export default formSlice.reducer;
