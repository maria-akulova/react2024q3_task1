import { useState, useEffect } from 'react';

export const useSearchQuery = (initialQuery = '') => {
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('search') || initialQuery;
  });

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchQuery);
    };
  }, [searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};
