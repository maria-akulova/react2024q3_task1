import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormValues } from 'components/index';
import { fieldName } from 'src/utils/stringUtils';

interface InputTextProps {
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const InputText: React.FC<InputTextProps> = ({ id, register, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="text" id={id} {...register(id)} />
      </label>
      {errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
