import React, { ChangeEvent, MouseEvent, useState } from 'react';
import style from './InputSearch.module.scss';
import { trunc } from 'utils/HelperString.ts';

interface InputSearchProps {
  onSearch: (searchTerm: string) => void;
  setCurrentPage: (currentPage: number) => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({ onSearch, setCurrentPage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearch(trunc(inputValue));
    setCurrentPage(1);
  };

  return (
    <>
      <label className={style.searchLabel} htmlFor="searchInput">
        Search by Name of animal
      </label>
      <section className={style.search_section}>
        <input
          className={style.input}
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Type to search..."
          value={inputValue}
          onChange={handleInputChange}
          maxLength={30}
        />
        <button className={style.searchButton} onClick={handleSearch}>
          Search
        </button>
      </section>
    </>
  );
};
