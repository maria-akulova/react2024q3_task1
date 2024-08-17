import { FormValues } from 'components/index';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { fieldName } from 'src/utils/stringUtils';

interface InputNumberProps {
  id: keyof FormValues;
  register: UseFormRegisterReturn;
  errors: FieldErrors<FormValues>;
}

export const InputNumber: React.FC<InputNumberProps> = ({ id, register, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="number" id={id} {...register} />
      </label>
      {errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
