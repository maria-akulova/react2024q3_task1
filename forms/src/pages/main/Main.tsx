// src/pages/Main.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Link } from 'react-router-dom';
import style from './Main.module.scss';
import { FormValues } from 'src/components';

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

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link to="/uncontrolled">Uncontrolled Form</Link>
        </li>
        <li>
          <Link to="/controlled">Controlled Form</Link>
        </li>
      </ul>

      <div>
        <h2>Form Data</h2>
        <div>
          <h3>Uncontrolled Form Data:</h3>
          {uncontrolledData.length > 0 ? (
            <ul>{dataList(uncontrolledData)}</ul>
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
        <div>
          <h3>Controlled Form Data:</h3>
          {controlledData.length > 0 ? (
            <ul>{dataList(controlledData)}</ul>
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
