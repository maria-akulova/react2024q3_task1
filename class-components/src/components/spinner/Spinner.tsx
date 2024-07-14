import React from 'react';
import style from './Spinner.module.scss';

export const Spinner: React.FC = () => {
  return (
    <div className={style.spinner_overlay}>
      <div className={style.spinner} />
    </div>
  );
};
