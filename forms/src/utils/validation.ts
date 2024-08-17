import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Must start with an uppercase letter'),
  age: yup
    .number()
    .typeError('Must be a number')
    .required('Age is required')
    .min(12, 'Age should be posititve value and more then 12'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[^@].*/, "Should't start with @")
    .matches(/^[^.].*/, "Should't start with a dot")
    .matches(/^\S*$/, "Should't contain spaces")
    .matches(/@+/, 'Should have symbol: @')
    .matches(/^[^.]*\.[^.]*$/, 'Should contain one dot')
    .matches(/^[^@\s]+@[^.@\s]+\.[^@\s]+$/, 'Check the email format. Example: user@example.com'),
});
