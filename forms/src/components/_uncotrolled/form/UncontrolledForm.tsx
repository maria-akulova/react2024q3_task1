import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from 'src/store/formSlice';
import { validationSchema } from 'utils/validation';
import {
  EmptyFormValues,
  FormErrors,
  FormValues,
  InputCheckboxU,
  InputNumberU,
  InputRadioU,
  InputTextU,
} from 'components/index';
import { ValidationError } from 'yup';

export const UncontrolledForm: React.FC = () => {
  const fields = Object.keys(EmptyFormValues);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>(EmptyFormValues);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormValues = {
      name: nameRef.current?.value ?? '',
      age: Number(ageRef.current?.value ?? ''),
      email: emailRef.current?.value ?? '',
      gender: maleRef.current?.checked ? 'male' : 'female',
      terms: termsRef.current?.checked ? true : false,
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
      dispatch(setFormData(formData));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <InputTextU id="name" nameRef={nameRef} errors={errors} />
      <InputNumberU id="age" nameRef={ageRef} errors={errors} />
      <InputTextU id="email" nameRef={emailRef} errors={errors} />
      <InputRadioU id="gender" femaleRef={femaleRef} maleRef={maleRef} errors={errors} />
      <InputCheckboxU id="terms" nameRef={termsRef} errors={errors} />

      <button type="submit">Submit</button>
    </form>
  );
};
