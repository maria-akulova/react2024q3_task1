import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Animal, InputSearch, Pagination, ResultSearch, Spinner, Flyout } from 'components/index';
import { useSearchQuery } from 'hooks/useSearchQuery';
import { restrictNumberAnimals } from 'src/utils/HelperString';
import { useThemeContext } from 'src/hooks/useThemeContext';
import { useGetAnimalsByPageMutation } from 'src/features/api/AnimalAPI';
import style from './Animals.module.scss';
import { useDispatch } from 'react-redux';
import { addAllAnimals } from 'src/features/page/pageSlice';

const ITEMS_PER_PAGE = 5;

export const Animals: React.FC = () => {
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useSearchQuery();
  const [activeAnimalId, setActiveAnimalId] = useState<string | null>(null);
  const { theme } = useThemeContext();
  const [animals, setAnimals] = useState<Animal[]>([]);

  const [getAnimals, { data, error, isLoading }] = useGetAnimalsByPageMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimals({
        searchTerm,
        itemsPerPage: ITEMS_PER_PAGE,
        page: currentPage,
      });

      setAnimals(response.data?.animals.map((animal) => ({ ...animal, checked: false })) ?? []);
      setTotalPages(restrictNumberAnimals(response.data?.page.totalPages ?? 1));
      dispatch(
        addAllAnimals({
          page: currentPage,
          animals: response.data?.animals.map((animal) => ({ ...animal, checked: false })) ?? [],
        }),
      );
    };

    fetchData();
  }, [searchTerm, currentPage, dispatch]);

  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to fetch animals');

  if (!data) {
    return <p>No animal details available.</p>;
  }

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
            {isLoading ? (
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
          {totalPages > 1 && !isLoading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        {!isLoading && <Flyout animals={animals} />}
      </div>
    </>
  );
};
