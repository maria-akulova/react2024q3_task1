import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { FormValues } from 'src/components';
import { fieldName } from 'src/utils/stringUtils';

interface InputRadioProps {
  id: keyof FormValues;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  errors: FieldErrors<FormValues>;
}

export const InputRadio: React.FC<InputRadioProps> = ({ id, maleRef, femaleRef, errors }) => {
  return (
    <div>
      <label htmlFor={id}>
        {fieldName(id)}
        <input type="radio" id={id} name={id} value="male" ref={maleRef} defaultChecked />
        Male
        <input type="radio" id={id} name={id} value="female" ref={femaleRef} />
        Female
      </label>
      {errors[id] && <p className="error">{errors[id]?.message}</p>}
    </div>
  );
};
