import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCounter, selectCount } from 'src/features/counter/counterSlice';
import { useThemeContext } from 'src/hooks/useThemeContext';
import { allAnimals, cleanAnimals } from 'src/features/animals/animalSlice';
import { convertToCSV } from 'src/utils/HelperString';
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
    animals.map((animal) => (animal.checked = false));
  };

  const downloadCSV = (data: Animal[]) => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.setAttribute('download', `${count}_animals.csv`);
      downloadLinkRef.current.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleDownload = () => {
    downloadCSV(allAnimalsFromStore);
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
