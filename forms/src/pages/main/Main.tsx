// src/pages/Main.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import style from './Main.module.scss';
import { FormValues, Header } from 'src/components';

const Main: React.FC = () => {
  const uncontrolledData = useSelector((state: RootState) => state.form.uncontrolledFormData);
  const controlledData = useSelector((state: RootState) => state.form.controlledFormData);

  const dataList = (source: FormValues[]) =>
    source.map((data) => {
      return (
        <li key={data.id} className={style.data_items}>
          <div key={data.id || 'defaultkey'} className={style.card}>
            <p>
              Name: {data.name}, Age: {data.age}
            </p>
          </div>
        </li>
      );
    });

  const form = (uncontrolledData: FormValues[]) => {
    return (
      <div>
        {uncontrolledData.length > 0 ? (
          <ul>{dataList(uncontrolledData)}</ul>
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div>
        <h2>Form Data</h2>
        <div>
          <h3>Uncontrolled Form Data:</h3>
          {form(uncontrolledData)}
        </div>
        <div>
          <h3>Controlled Form Data:</h3>
          {form(controlledData)}
        </div>
      </div>
    </div>
  );
};

export default Main;
