import React from 'react';
import style from './ResultSearch.module.scss';
import { Animal } from 'components';

interface ResultSearchProps {
  animals: Animal[];
  onItemClick: (id: string) => void;
}

export const ResultSearch: React.FC<ResultSearchProps> = ({ animals, onItemClick }) => {
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
              className={style.animal}
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
