import React from 'react';
import style from './AnimalList.module.scss';
import { useThemeContext } from 'src/hooks/useThemeContext';
import { useSelector } from 'react-redux';
import { Animal } from '..';

interface AnimalListReduxProps {
  onItemClick: (id: string) => void;
  activeAnimalId: string | null;
}

export const AnimalListRedux: React.FC<AnimalListReduxProps> = ({
  onItemClick,
  activeAnimalId,
}) => {
  const animals: Animal[] = useSelector((state: { animals: Animal[] }) => state.animals);

  const { theme } = useThemeContext();
  const handleCheckboxChange = (animal: Animal) => {
    console.log(`${animal.name} is ${animal.checked ? 'checked' : 'unchecked'}`);
  };

  return (
    <>
      <section className={style.section}>
        <div>
          {animals.map((animal) => (
            <>
              <input
                type="checkbox"
                className={style.checkbox}
                onChange={() => {
                  animal.checked = !animal.checked;
                  handleCheckboxChange(animal);
                }}
              />
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
            </>
          ))}
        </div>
      </section>
    </>
  );
};
