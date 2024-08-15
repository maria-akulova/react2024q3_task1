// src/components/UncontrolledForm.tsx
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUncontrolledFormData } from 'src/store/formSlice';
import { validationSchema } from 'utils/validation';
import { FormValues } from '..';
interface ErrorValidation {
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
  const [errors, setErrors] = useState<{ name?: string, age?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormValues = {
      name: nameRef.current?.value ?? '',
      age: ageRef.current?.value ? Number(ageRef.current?.value) : 0,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      dispatch(setUncontrolledFormData(formData));
      navigate('/');
    } catch (validationErrors: unknown) {
      const errorMessages: { name?: string, age?: string } = {};
      const validationErrors1 = validationErrors as ErrorValidation;
      validationErrors1.inner.forEach((error: { path: string, message: string }) => {
        errorMessages[error.path as keyof typeof errorMessages] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>
          Age:
          <input type="number" ref={ageRef} />
        </label>
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
