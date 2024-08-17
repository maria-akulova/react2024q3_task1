import { InputCommonPropsC } from 'components/index';

export const InputCheckbox: React.FC<InputCommonPropsC> = ({ id, register }) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} {...register(id)} />
        accept Terms and Conditions agreement
      </label>
    </div>
  );
};
