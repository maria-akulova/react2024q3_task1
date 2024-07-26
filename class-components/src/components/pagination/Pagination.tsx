import React from 'react';
import style from './Pagination.module.scss';
import { useThemeContext } from 'src/hooks/useThemeContext';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const { theme } = useThemeContext();

  return (
    <div className={style.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${style.page_button} ${page === currentPage ? style.active : ''} ${style[theme]}`}
          onClick={(e) => {
            e.stopPropagation();
            onPageChange(page);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
