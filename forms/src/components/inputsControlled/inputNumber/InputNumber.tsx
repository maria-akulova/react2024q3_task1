import { FormValues } from '../..';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

interface InputNumberProps {
  id: keyof FormValues;
  register: UseFormRegisterReturn;
  errors: FieldErrors<FormValues>;
}

export const InputNumber: React.FC<InputNumberProps> = ({ id, register, errors }) => {
  const idString = id.toString();
  const fieldName = idString[0].toUpperCase() + idString.slice(1);
  return (
    <div>
      <label htmlFor={id}>
        {fieldName}:
        <input type="number" id={id} {...register} />
      </label>
      {errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
