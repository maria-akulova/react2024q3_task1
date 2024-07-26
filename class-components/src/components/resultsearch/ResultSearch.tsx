import React from 'react';
import style from './ResultSearch.module.scss';
import { Animal } from 'components/index';
import { useThemeContext } from 'src/hooks/useThemeContext';

interface ResultSearchProps {
  animals: Animal[];
  onItemClick: (id: string) => void;
  activeAnimalId: string | null;
}

export const ResultSearch: React.FC<ResultSearchProps> = ({
  animals,
  onItemClick,
  activeAnimalId,
}) => {
  const { theme } = useThemeContext();

  return (
    <>
      <section className={style.section}>
        {animals.length === 0 && (
          <div className={style.noResults}>No results. Try another name.</div>
        )}
        <div>
          {animals.map((animal) => (
            <div
              key={animal.uid}
              className={`${style.animal} ${activeAnimalId === animal.uid ? style.active : ''} ${style[theme]}`}
              onClick={(e) => {
                e.stopPropagation();
                onItemClick(animal.uid);
              }}
            >
              <p>{animal.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
