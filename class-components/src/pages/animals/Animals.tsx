import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Animal, InputSearch, ResultSearch, SearchResult, Spinner } from '../../components/index';
import { Pagination } from '../../components/pagination/Pagination';
import api from '../../services/api';
import style from './Animals.module.scss';

const ITEMS_PER_PAGE = 10;

export const Animals: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useState(1);

  useEffect(() => {
    const previousSearch = localStorage.getItem('search') || '';
    getAnimals(previousSearch, searchParams);
  }, [searchParams]);

  const getAnimals = async (searchTerm: string, page: number) => {
    setLoading(true);
    try {
      const res = (await api.getAnimals(searchTerm, ITEMS_PER_PAGE, page)) as SearchResult;
      setAnimals(res.animals);
      setTotalPages(res.page.totalPages);
    } catch (err) {
      console.error('Failed to fetch animals', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAnimalClick = (animalId: string) => {
    navigate(`/details/${animalId}`);
  };

  const handleCloseDetails = () => {
    navigate('/');
  };

  const handlePageChange = (page: number) => {
    setSearchParams(() => {
      return page;
    });
    const previousSearch = localStorage.getItem('search') || '';
    getAnimals(previousSearch, page);
  };

  if (error) {
    throw new Error('Test Error');
  }

  return (
    <>
      <h1 className="header">Animals</h1>
      <InputSearch onSearch={(searchTerm) => getAnimals(searchTerm, 1)} />
      <button className="errorButton" onClick={() => setError(true)}>
        Throw Test Error
      </button>
      <div className={style.container}>
        <div className={style.left_section} onClick={handleCloseDetails}>
          {loading ? (
            <Spinner />
          ) : (
            <ResultSearch animals={animals} onItemClick={handleAnimalClick} />
          )}
          {totalPages > 1 && (
            <Pagination
              currentPage={searchParams}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        {location.pathname.includes('/details/') && (
          <div className={style.right_section} onClick={(e) => e.stopPropagation()}>
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
};
