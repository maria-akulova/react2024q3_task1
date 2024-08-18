import { InputCommonPropsC } from 'src/components';

export const PasswordConfirmed: React.FC<InputCommonPropsC> = ({ id, register, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        Confirm Password:
        <input type="password" {...register(id)} id={id} />
      </label>
      {errors[id] && errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
