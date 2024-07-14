import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { Animal, InputSearch, ResultSearch, Spinner } from '../../components/index';
import api from '../../services/api';
import style from './Animals.module.scss';

export const Animals: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const previousSearch = localStorage.getItem('search');
    previousSearch ? getAnimals(previousSearch) : getAnimals('');
  }, []);

  const getAnimals = async (searchTerm: string) => {
    setLoading(true);
    try {
      const res = await api.getAnimals(searchTerm);
      setAnimals(res.animals);
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

  if (error) {
    throw new Error('Test Error');
  }

  return (
    <>
      <h1 className="header">Animals</h1>
      <InputSearch onSearch={getAnimals} />
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
        </div>
        <div className={style.right_section} onClick={(e) => e.stopPropagation()}>
          {id && <Outlet />}
        </div>
      </div>
    </>
  );
};
