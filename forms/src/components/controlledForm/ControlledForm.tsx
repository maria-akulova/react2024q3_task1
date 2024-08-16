import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setFormData } from 'src/store/formSlice';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from 'src/utils/validation';
import { FormValues } from '..';

export const ControlledForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setFormData(data));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      <div>
        <label>
          Name:
          <input {...register('name')} />
        </label>
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div>
        <label>
          Age:
          <input type="number" {...register('age', { valueAsNumber: true })} />
        </label>
        {errors.age && <p className="error">{errors.age.message}</p>}
      </div>
      <input type="submit" disabled={!isValid} />
    </form>
  );
};
