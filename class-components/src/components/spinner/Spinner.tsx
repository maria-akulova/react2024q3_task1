import React, { Component } from 'react';
import style from './Spinner.module.scss';

export class Spinner extends Component {
  render(): React.ReactNode {
    return (
      <div className={style.spinner_overlay}>
        <div className={style.spinner} />
      </div>
    );
  }
}
