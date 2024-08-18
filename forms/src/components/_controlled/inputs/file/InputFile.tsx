import { InputCommonPropsC } from 'components/index';
import { fieldName } from 'src/utils/stringUtils';

export const InputFile: React.FC<InputCommonPropsC> = ({ id, register, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="file" id={id} {...register(id)} />
      </label>
      {errors[id] && <p className="error">{errors[id].message}</p>}
    </div>
  );
};
