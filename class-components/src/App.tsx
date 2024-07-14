import React, { useState, useEffect, useCallback } from 'react';
import { Animal, InputSearch, ResultSearch, Spinner } from './components/index.ts';
import './App.css';
import api from './services/api.ts';
import { useSearchQuery } from './hooks/useSearchQuery';

const App: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery] = useSearchQuery('');

  const getAnimals = useCallback(async (searchTerm: string) => {
    setLoading(true);
    try {
      const res = await api.getAnimals(searchTerm);
      setAnimals(res.animals);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch animals', err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAnimals(searchQuery);
  }, [getAnimals, searchQuery]);

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
      {loading ? <Spinner /> : <ResultSearch animals={animals} />}
    </>
  );
};

export default App;
