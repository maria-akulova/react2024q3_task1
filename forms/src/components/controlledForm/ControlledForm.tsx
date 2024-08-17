import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setFormData } from 'src/store/formSlice';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from 'src/utils/validation';
import { FormValues, InputTextC, InputNumberC } from '..';

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
      <InputTextC id="name" register={register} errors={errors} />
      <InputNumberC id="age" register={register('age', { valueAsNumber: true })} errors={errors} />
      <InputTextC id="email" register={register} errors={errors} />
      <input type="submit" disabled={!isValid} />
    </form>
  );
};
