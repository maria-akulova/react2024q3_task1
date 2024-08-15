import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(12, 'Age should be posititve value and more then 12'),
});
