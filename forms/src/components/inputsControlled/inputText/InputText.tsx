import { FormValues } from '../..';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputTextProps {
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const InputText: React.FC<InputTextProps> = ({ id, register, errors }) => {
  const idString = id.toString();
  const fieldName = idString[0].toUpperCase() + idString.slice(1);
  return (
    <div>
      <label htmlFor={id}>
        {fieldName}:
        <input type="text" id={id} {...register(id)} />
      </label>
      {errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
