import React from 'react';
import style from './AnimalList.module.scss';
import { Animal } from 'components/index';
import { useThemeContext } from 'src/hooks/useThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { allAnimals, animalAdded, animalRemove } from 'src/features/animals/animalSlice';
import { decrement, increment } from 'src/features/counter/counterSlice';

interface ResultSearchProps {
  animals: Animal[];
  onItemClick: (id: string) => void;
  activeAnimalId: string | null;
}

export const AnimalList: React.FC<ResultSearchProps> = ({
  animals,
  onItemClick,
  activeAnimalId,
}) => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const allAnimalsFromStore = useSelector(allAnimals);

  const handleCheckboxChange = (animal: Animal) => {
    if (animal.checked) {
      dispatch(increment());
      const animalNew = { id: animal.uid, ...animal };
      dispatch(animalAdded(animalNew));
    } else {
      dispatch(decrement());
      dispatch(animalRemove(animal.uid));
    }
  };

  const animalsListItmes = animals.map((animal) => (
    <li key={animal.uid} className={style.animal_items}>
      <input
        type="checkbox"
        className={style.checkbox}
        onChange={() => {
          animal.checked = !animal.checked;
          handleCheckboxChange(animal);
        }}
        checked={!!allAnimalsFromStore.find((animalStore) => animalStore.uid === animal.uid)}
      />
      <div
        key={animal.uid || 'defaultkey'}
        className={`${style.animal} ${activeAnimalId === animal.uid ? style.active : ''} ${style[theme]}`}
        onClick={(e) => {
          e.stopPropagation();
          onItemClick(animal.uid);
        }}
      >
        <p>{animal.name}</p>
      </div>
    </li>
  ));

  return (
    <>
      <section className={style.section}>
        {animals.length === 0 && (
          <div className={style.noResults}>No results. Try another name.</div>
        )}
        <ul>{animalsListItmes}</ul>
      </section>
    </>
  );
};
