import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import api from 'src/services/api';
import { Spinner } from 'components/index';
import { getAnimalType } from 'utils/HelperString';
import style from './AnimalDetails.module.scss';
import { useThemeContext } from 'src/hooks/useThemeContext';
import { useGetAnimalByIDQuery } from 'src/features/api/AnimalAPI';

export const AnimalDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { data, error, isLoading } = useGetAnimalByIDQuery(id ?? '');

  const animalDetails = data?.animal;

  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to fetch animal details');

  if (!data) {
    return <p>No animal details available.</p>;
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>{animalDetails?.name}</h2>
      <p>Unique number: {animalDetails?.uid}</p>
      <p>The Type is {getAnimalType(data.animal)}</p>
      <button
        className={`${style.close_button} ${style[theme]}`}
        onClick={() => navigate(`/page/${window.location.pathname.split('/')[2]}`)}
      >
        Close
      </button>
    </div>
  );
};
