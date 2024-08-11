import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCounter, selectCount } from 'src/features/counter/counterSlice';
import { useThemeContext } from 'src/hooks/useThemeContext';
import { allAnimals, cleanAnimals } from 'src/features/animals/animalSlice';
import { downloadCSV } from 'src/utils/HelperString';
import { Animal } from '..';
import { useRef } from 'react';
import style from './Flyout.module.scss';

interface FlyoutProps {
  animals: Animal[];
}

export const Flyout: React.FC<FlyoutProps> = ({ animals }) => {
  const count = useSelector(selectCount);
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const allAnimalsFromStore = useSelector(allAnimals);
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleCleanAll = () => {
    dispatch(cleanCounter());
    dispatch(cleanAnimals());
    animals.map((animal) => ({ ...animal, checked: false }));
  };

  const handleDownload = () => {
    downloadCSV(allAnimalsFromStore, downloadLinkRef);
  };

  return (
    <>
      {count > 0 && (
        <div className={`${style.flyout} ${style[theme]}`}>
          <p>
            {count} item{count === 1 ? '' : 's'} {count === 1 ? 'is' : 'are'} selected
          </p>
          <button onClick={handleCleanAll}>Unselect all</button>
          <button onClick={handleDownload}>Download</button>
          <a ref={downloadLinkRef} style={{ display: 'none' }}>
            DownloadLink
          </a>
        </div>
      )}
    </>
  );
};
