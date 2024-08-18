import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Must start with an uppercase latin letter')
    .matches(/^[a-zA-Z]+$/, 'Must have only latin letters'),
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
  gender: yup.string(),
  terms: yup.boolean(),
  photo: yup
    .mixed<FileList | string>()
    .required('Photo is required')
    .test('fileSize', 'The file size should not exceed 5MB', (value) => {
      if (typeof value === 'string') {
        return true;
      }
      if (value instanceof FileList && value.length > 0) {
        return value[0].size <= 5 * 1024 * 1024;
      }
      return false;
    })
    .test('fileFormat', 'Unsupported Format. Use jpeg or png.', (value) => {
      if (typeof value === 'string') {
        return true;
      }
      if (value instanceof FileList && value.length > 0) {
        return ['image/jpeg', 'image/png'].includes(value[0].type);
      }
      return false;
    }),
});
