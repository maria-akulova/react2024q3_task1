import { Component, ChangeEvent, MouseEvent } from 'react';
import style from './InputSearch.module.scss';
import { trunc } from '../../utils/HelperString.ts';

interface InputSearchProps {
  onSearch: (searchTerm: string) => void;
}

export class InputSearch extends Component<InputSearchProps> {
  state = {
    searchTerm: '',
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const searchName = trunc(this.state.searchTerm);
    this.setState({ searchTerm: searchName });
    this.props.onSearch(searchName);
    localStorage.setItem('search', searchName);
  };

  componentDidMount(): void {
    const historySearch: string | null = localStorage.getItem('search');
    const result = historySearch ? historySearch : '';
    this.setState({ searchTerm: result });
  }

  render() {
    return (
      <>
        <label className={style.searchLabel} htmlFor="searchInput">
          Search by Name of animal
        </label>
        <section>
          <input
            className={style.input}
            type="text"
            id="searchInput"
            name="searchInput"
            placeholder="Type to search..."
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            maxLength={30}
          />
          <button className={style.searchButton} onClick={this.handleSearch}>
            Search
          </button>
        </section>
      </>
    );
  }
}
