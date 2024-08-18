import { InputCommonPropsU } from 'src/components';

export const PasswordConfirmed: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        Confirm Password:
        <input type="password" id={id} ref={nameRef} maxLength={8} />
      </label>
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
