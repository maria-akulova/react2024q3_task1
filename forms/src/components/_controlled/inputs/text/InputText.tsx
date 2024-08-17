import { InputCommonPropsC } from 'components/index';
import { fieldName } from 'utils/stringUtils';

export const InputText: React.FC<InputCommonPropsC> = ({ id, register, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="text" id={id} {...register(id)} maxLength={30} />
      </label>
      {errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
