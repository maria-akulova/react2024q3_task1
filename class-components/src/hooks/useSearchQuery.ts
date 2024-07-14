import { useState, useEffect } from 'react';

export const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('search') || '';
  });

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchQuery);
    };
  }, [searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};
