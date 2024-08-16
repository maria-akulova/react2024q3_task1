// src/components/UncontrolledForm.tsx
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from 'src/store/formSlice';
import { validationSchema } from 'utils/validation';
import { EmptyFormValues, FormErrors, FormValues } from 'components/index';
interface IErrorValidation {
  inner: {
    path: string,
    message: string,
  }[];
}

export const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<FormErrors>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormValues = {
      name: nameRef.current?.value ?? '',
      age: ageRef.current?.value ? Number(ageRef.current?.value) : 0,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors(EmptyFormValues);
      dispatch(setFormData(formData));
      navigate('/');
    } catch (validationErrors: unknown) {
      const errorMessages: FormErrors = EmptyFormValues;
      const errors = validationErrors as IErrorValidation;
      errors.inner.forEach((error: { path: string, message: string }) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        {errors?.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>
          Age:
          <input type="number" ref={ageRef} />
        </label>
        {errors?.age && <p className="error">{errors.age}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};
