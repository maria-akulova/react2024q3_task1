import React, { ChangeEvent, MouseEvent } from 'react';
import style from './InputSearch.module.scss';
import { trunc } from '../../utils/HelperString.ts';
import { useSearchQuery } from '../../hooks/useSearchQuery';

interface InputSearchProps {
  onSearch: (searchTerm: string) => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useSearchQuery('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const searchName = trunc(searchTerm);
    setSearchTerm(searchName);
    onSearch(searchName);
    localStorage.setItem('search', searchTerm);
  };

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
          value={searchTerm}
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
