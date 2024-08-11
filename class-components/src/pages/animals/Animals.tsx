import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import {
  Animal,
  InputSearch,
  Pagination,
  ResultSearch,
  SearchResult,
  Spinner,
  Flyout,
} from 'components/index';
import api from 'src/services/api';
import style from './Animals.module.scss';
import { useSearchQuery } from 'hooks/useSearchQuery';
import { restrictNumberAnimals } from 'src/utils/HelperString';
import { useThemeContext } from 'src/hooks/useThemeContext';

const ITEMS_PER_PAGE = 5;

export const Animals: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useSearchQuery();
  const [activeAnimalId, setActiveAnimalId] = useState<string | null>(null);
  const { theme } = useThemeContext();

  useEffect(() => {
    getAnimals(searchTerm, currentPage);
  }, [searchTerm, currentPage]);

  const getAnimals = async (searchTerm: string, page: number) => {
    setLoading(true);
    try {
      const res = (await api.getAnimals(searchTerm, ITEMS_PER_PAGE, page)) as SearchResult;
      setAnimals(res.animals);
      setTotalPages(restrictNumberAnimals(res.page.totalPages));
    } catch (err) {
      console.error('Failed to fetch animals', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAnimalClick = (animalId: string) => {
    setActiveAnimalId(animalId);
    navigate(`/page/${currentPage}/details/${animalId}`);
  };

  const handleCloseDetails = () => {
    setActiveAnimalId(null);
    navigate(`/page/${currentPage}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setActiveAnimalId(null);
    navigate(`/page/${newPage}`);
  };

  if (error) {
    throw new Error('Test Error');
  }

  return (
    <>
      <InputSearch
        onSearch={(searchTerm) => {
          setSearchTerm(searchTerm);
          handlePageChange(1);
        }}
        setCurrentPage={setCurrentPage}
      />
      <div className={style.search_result}>
        <div className={style.container}>
          <div className={style.left_section} onClick={handleCloseDetails}>
            {loading ? (
              <Spinner />
            ) : (
              <ResultSearch
                animals={animals}
                onItemClick={handleAnimalClick}
                activeAnimalId={activeAnimalId}
              />
            )}
          </div>
          <div className={style.right_section}>
            {location.pathname.includes('/details/') && (
              <div
                className={`${style.details} ${style[theme]}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Outlet />
              </div>
            )}
          </div>
        </div>
        <div>
          {totalPages > 1 && !loading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        {!loading && <Flyout animals={animals} />}
      </div>
    </>
  );
};
