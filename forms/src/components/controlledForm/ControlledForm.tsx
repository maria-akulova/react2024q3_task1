// src/components/ControlledForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setControlledFormData } from 'src/store/formSlice';

interface FormValues {
  name: string;
  age: number;
}

export const ControlledForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setControlledFormData(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Name:
          <input {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="number" {...register('age', { required: true, valueAsNumber: true })} />
          {errors.age && <span>This field is required</span>}
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
