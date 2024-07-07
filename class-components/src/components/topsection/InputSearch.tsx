import { Component } from 'react';
import style from './InputSearch.module.scss';

export class InputSearch extends Component {
  render() {
    return (
      <>
        <section>
          <label htmlFor="fname"></label>
          <input
            className={style.input}
            type="text"
            id="fname"
            name="fname"
            placeholder="Type to search..."
          ></input>
          <button className={style.searchButton}>Search</button>
        </section>
      </>
    );
  }
}
