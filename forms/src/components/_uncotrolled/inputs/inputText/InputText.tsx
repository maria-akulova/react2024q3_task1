import { fieldName } from 'src/utils/stringUtils';
import { InputCommonPropsU } from 'components/index';

export const InputText: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input type="text" id={id} ref={nameRef} maxLength={30} />
      </label>
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
