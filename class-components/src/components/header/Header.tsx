import React from 'react';
import style from './Header.module.scss';
import { useThemeContext } from 'src/hooks/useThemeContext';

export const Header: React.FC = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <>
      <div className={style.header}>
        <h1 className="header">Animals</h1>
        <div className={style.theme}>
          <form action="" data-testid="theme-checkbox">
            <input
              type="radio"
              name="rdo"
              id="light"
              className={style.input_light}
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
            />
            <input
              type="radio"
              name="rdo"
              id="dark"
              className={style.input_dark}
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
            />
            <div className={style.switch}>
              <label htmlFor="light" className={style.label_light} data-testid="theme-light">
                Light
              </label>
              <label htmlFor="dark" className={style.label_dark} data-testid="theme-dark">
                Blue
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
