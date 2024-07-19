import { useState, useEffect } from 'react';

export const useSearchQuery = (initialQuery = '') => {
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem('search') ?? initialQuery,
  );

  useEffect(() => localStorage.setItem('search', searchQuery), [searchQuery]);

  return [searchQuery, setSearchQuery] as const;
};
