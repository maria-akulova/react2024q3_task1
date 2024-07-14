import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Spinner } from '../spinner/Spinner';
import { Animal } from 'components';
import { getAnimalType } from '../../utils/HelperString';

export const AnimalDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchAnimalDetails(id);
    }
  }, [id]);

  const fetchAnimalDetails = async (animalId: string) => {
    setLoading(true);
    try {
      const res = await api.getAnimalDetails(animalId);
      setAnimal(res.animal);
    } catch (err) {
      console.error('Failed to fetch animal details', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!animal) {
    return <p>No animal details available.</p>;
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>{animal.name}</h2>
      <p>Unique number: {animal.uid}</p>
      <p>The Type is {getAnimalType(animal)}</p>
      <button onClick={() => navigate('/')}>Close</button>
    </div>
  );
};
