import { fieldName } from 'src/utils/stringUtils';
import { InputCommonPropsU } from 'components/index';

export const InputNumber: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="number" id={id} ref={nameRef} />
      </label>
      {errors[id] !== 0 && errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
