import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Animal, InputSearch, ResultSearch, SearchResult, Spinner } from '../../components/index';
import { Pagination } from '../../components/pagination/Pagination';
import api from '../../services/api';
import style from './Animals.module.scss';
import { useSearchQuery } from '../../hooks/useSearchQuery';

const ITEMS_PER_PAGE = 10;

export const Animals: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm] = useSearchQuery();
  const [activeAnimalId, setActiveAnimalId] = useState<string | null>(null);

  useEffect(() => {
    getAnimals(searchTerm, currentPage);
  }, [currentPage]);

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
    setActiveAnimalId(animalId);
    navigate(`/page/${currentPage}/details/${animalId}`);
  };

  const handleCloseDetails = () => {
    setActiveAnimalId(null);
    navigate(`/page/${currentPage}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    getAnimals(searchTerm, newPage);
    navigate(`/page/${newPage}`);

  };

  if (error) {
    throw new Error('Test Error');
  }

  return (
    <>
      <h1 className="header">Animals</h1>
      <InputSearch
        onSearch={(searchTerm) => getAnimals(searchTerm, 1)}
        currentPage={setCurrentPage}
      />
      <button className="errorButton" onClick={() => setError(true)}>
        Throw Test Error
      </button>
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
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}

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
