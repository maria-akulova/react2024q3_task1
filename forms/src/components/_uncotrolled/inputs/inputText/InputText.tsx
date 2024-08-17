import { FormErrors, FormValues } from 'components/index';
import { fieldName } from 'src/utils/stringUtils';

interface InputTextProps {
  id: keyof FormValues;
  nameRef: React.RefObject<HTMLInputElement>;
  errors: FormErrors;
}

export const InputText: React.FC<InputTextProps> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="text" id={id} ref={nameRef} />
      </label>
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
