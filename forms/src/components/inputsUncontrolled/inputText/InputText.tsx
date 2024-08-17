import { FormErrors, FormValues } from '../..';

interface InputTextProps {
  id: keyof FormValues;
  nameRef: React.RefObject<HTMLInputElement>;
  errors: FormErrors;
}

export const InputText: React.FC<InputTextProps> = ({ id, nameRef, errors }) => {
  const idString = id.toString();
  const fieldName = idString[0].toUpperCase() + idString.slice(1);
  return (
    <div>
      <label htmlFor={id}>
        {fieldName}:
        <input type="text" id={id} ref={nameRef} />
      </label>
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
