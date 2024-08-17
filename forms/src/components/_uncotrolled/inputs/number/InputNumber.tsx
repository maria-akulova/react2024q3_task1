import { FormErrors, FormValues } from 'components/index';
import { fieldName } from 'src/utils/stringUtils';

interface InputNumberProps {
  id: keyof FormValues;
  nameRef: React.RefObject<HTMLInputElement>;
  errors: FormErrors;
}

export const InputNumber: React.FC<InputNumberProps> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="number" id={id} ref={nameRef} />
      </label>
      {errors[id] !== 0 && errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
