import { InputCommonPropsU } from 'components/index';

export const InputCheckbox: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} ref={nameRef} />
        accept Terms and Conditions agreement
      </label>
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
