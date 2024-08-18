import { InputCommonPropsC } from 'components/index';
import { fieldName } from 'utils/stringUtils';

export const InputRadio: React.FC<InputCommonPropsC> = ({ id, register }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="radio" id={id} {...register(id)} value="male" />
        Male
        <input type="radio" id={id} {...register(id)} value="female" />
        Female
      </label>
    </div>
  );
};
