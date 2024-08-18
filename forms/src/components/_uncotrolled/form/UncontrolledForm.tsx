import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from 'src/store/formSlice';
import { validationSchema } from 'utils/validation';
import { formatPhoto } from 'utils/stringUtils';
import { ValidationError } from 'yup';
import {
  EmptyFormValues,
  ErrorBoundary,
  FormErrors,
  FormValues,
  InputCheckboxU,
  InputFileU,
  InputNumberU,
  InputRadioU,
  InputTextU,
} from 'components/index';

export const UncontrolledForm: React.FC = () => {
  const fields = Object.keys(EmptyFormValues);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>(EmptyFormValues);

  const handleSubmit = async (e: React.FormEvent) => {
    'use server';
    e.preventDefault();

    const photo = photoRef.current?.files ? photoRef.current.files : '';

    const formData: FormValues = {
      name: nameRef.current?.value ?? '',
      age: Number(ageRef.current?.value ?? ''),
      email: emailRef.current?.value ?? '',
      gender: maleRef.current?.checked ? 'male' : 'female',
      terms: termsRef.current?.checked ? true : false,
      photo: photo,
    };

    const newErrors: FormErrors = { ...EmptyFormValues };
    let isValid = true;

    for (const field of fields) {
      try {
        await validationSchema.validateAt(field, formData);
        newErrors[field] = typeof field === 'number' ? 0 : '';
      } catch (validationError) {
        if (validationError instanceof ValidationError) {
          newErrors[field] = validationError.message;
        } else {
          console.log(`Uknown errors: ${validationError}`);
        }
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      const photoUpload = await formatPhoto(formData.photo[0]);
      dispatch(setFormData({ ...formData, photo: photoUpload }));
      navigate('/');
    }
  };

  return (
    <ErrorBoundary>
      <form onSubmit={handleSubmit} autoComplete="on">
        <InputTextU id="name" nameRef={nameRef} errors={errors} />
        <InputNumberU id="age" nameRef={ageRef} errors={errors} />
        <InputTextU id="email" nameRef={emailRef} errors={errors} />
        <InputRadioU id="gender" femaleRef={femaleRef} maleRef={maleRef} errors={errors} />
        <InputCheckboxU id="terms" nameRef={termsRef} errors={errors} />
        <InputFileU id="photo" nameRef={photoRef} errors={errors} />

        <button type="submit">Submit</button>
      </form>
    </ErrorBoundary>
  );
};
