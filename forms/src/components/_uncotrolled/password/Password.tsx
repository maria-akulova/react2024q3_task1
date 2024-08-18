import { InputCommonPropsU } from 'src/components';
import { useState } from 'react';
import { fieldName } from 'utils/stringUtils';

export const Password: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}:
        <input id={id} type={showPassword ? 'text' : 'password'} ref={nameRef} />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="showPassword"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </label>

      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
