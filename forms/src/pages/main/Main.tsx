import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import style from './Main.module.scss';
import { FormValues, Header } from 'src/components';

const Main: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form.formData);

  const dataList = (source: FormValues[]) =>
    source.map((data) => {
      return (
        <li key={data.id} className={style.data_items}>
          <div key={data.id || 'defaultkey'} className={style.card}>
            <p>
              Name: {data.name}, Age: {data.age}, Email: {data.email}, Gender: {data.gender}, Accept
              Terms and Conditions agreement: {data.terms ? 'Yes' : 'No'}
            </p>
          </div>
        </li>
      );
    });

  const form = (source: FormValues[]) => {
    return (
      <div>{source.length > 0 ? <ul>{dataList(source)}</ul> : <p>No data submitted yet.</p>}</div>
    );
  };

  return (
    <div>
      <Header />
      <div>{form(formData)}</div>
    </div>
  );
};

export default Main;
