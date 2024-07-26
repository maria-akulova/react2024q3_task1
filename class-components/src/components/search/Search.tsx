import React, { ChangeEvent, MouseEvent } from 'react';
import style from './Search.module.scss';
import { trunc } from 'utils/HelperString.ts';
import { useSearchQuery } from 'src/hooks/useSearchQuery';
import { useThemeContext } from 'src/hooks/useThemeContext';

interface InputSearchProps {
  onSearch: (searchTerm: string) => void;
  setCurrentPage: (currentPage: number) => void;
}

export const Search: React.FC<InputSearchProps> = ({ onSearch, setCurrentPage }) => {
  const [inputValue, setInputValue] = useSearchQuery();
  const { theme } = useThemeContext();

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
        Help the family to find interesting animal!
      </label>
      <section className={style.search_section}>
        <input
          className={`${style.input} ${style[theme]}`}
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Type to search..."
          value={inputValue}
          onChange={handleInputChange}
          maxLength={30}
        />
        <button className={`${style.searchButton} ${style[theme]}`} onClick={handleSearch}>
          Search
        </button>
      </section>
    </>
  );
};
