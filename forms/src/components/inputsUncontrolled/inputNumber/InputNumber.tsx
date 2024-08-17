import { FormErrors, FormValues } from '../..';

interface InputNumberProps {
  id: keyof FormValues;
  nameRef: React.RefObject<HTMLInputElement>;
  errors: FormErrors;
}

export const InputNumber: React.FC<InputNumberProps> = ({ id, nameRef, errors }) => {
  const idString = id.toString();
  const fieldName = idString[0].toUpperCase() + idString.slice(1);
  return (
    <div>
      <label htmlFor={id}>
        {fieldName}:
        <input type="number" id={id} ref={nameRef} />
      </label>
      {errors[id] !== 0 && errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
