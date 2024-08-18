import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setFormData } from 'src/store/formSlice';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from 'utils/validation';
import {
  InputTextC,
  InputNumberC,
  InputRadioC,
  InputCheckboxC,
  ErrorBoundary,
  InputFileC,
  FormValues,
  PasswordC,
  PasswordConfirmedC,
} from 'components/index';
import { getBase64 } from 'src/utils/stringUtils';

export const ControlledForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      gender: 'male',
      terms: false,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    let photoData: string = '';

    if (data.photo instanceof FileList && data.photo.length > 0) {
      photoData = await getBase64(data.photo[0]);
    } else if (typeof data.photo === 'string') {
      photoData = data.photo;
    }

    dispatch(
      setFormData({
        ...data,
        photo: photoData,
      }),
    );

    navigate('/');
  };

  return (
    <ErrorBoundary>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" className="form">
        <InputCheckboxC id="terms" register={register} errors={errors} />
        <InputRadioC id="gender" register={register} errors={errors} />
        <InputTextC id="name" register={register} errors={errors} />
        <InputNumberC
          id="age"
          register={register('age', { valueAsNumber: true })}
          errors={errors}
        />
        <InputTextC id="email" register={register} errors={errors} />
        <InputFileC id="photo" register={register} errors={errors} />
        <PasswordC id="password" register={register} errors={errors} />
        <PasswordConfirmedC id="confirmPassword" register={register} errors={errors} />

        <input type="submit" disabled={!isValid} className="submit" />
      </form>
    </ErrorBoundary>
  );
};
