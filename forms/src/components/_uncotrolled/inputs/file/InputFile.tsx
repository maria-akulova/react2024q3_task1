import { InputCommonPropsU } from 'components/index';
import { fieldName } from 'src/utils/stringUtils';

export const InputFile: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="file" id={id} ref={nameRef} />
      </label>
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
