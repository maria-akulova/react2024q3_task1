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
          <div className={style.photo}>
            <img src={data.photo as string} alt="User image" />
          </div>
          <div key={data.id || 'defaultkey'} className={style.card}>
            <h2>{data.name}</h2>
            <div>
              My name is {data.name}. I&apos;m {data.age}, {data.gender}. You can contact me by
              email: {data.email}.
            </div>
            <div>
              I {data.terms ? 'Accept' : "DON'T accept"} yours Terms and Conditions agreement.{' '}
            </div>
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
