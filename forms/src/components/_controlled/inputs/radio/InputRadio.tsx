import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from 'src/components';
import { fieldName } from 'src/utils/stringUtils';

interface InputRadioProps {
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const InputRadio: React.FC<InputRadioProps> = ({ id, register, errors }) => {
  return (
    <div>
      <label>
        {fieldName(id)}
        <input type="radio" id={`${id}-male`} {...register(id)} value="male" />
        Male
        <input type="radio" id={`${id}-female`} {...register(id)} value="female" />
        Female
      </label>
      {errors[id] && <p className="error">{errors[id]?.message}</p>}
    </div>
  );
};
