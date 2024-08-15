// src/components/UncontrolledForm.tsx
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUncontrolledFormData } from 'src/store/formSlice';

export const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const age = Number(ageRef.current?.value) || 0;

    dispatch(setUncontrolledFormData({ name, age }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="number" ref={ageRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
