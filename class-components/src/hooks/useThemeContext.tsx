import { useContext } from 'react';
import { ThemeContext } from 'src/context/ThemeContext';

export const useThemeContext = () => {
  const themeContextGlobal = useContext(ThemeContext);

  if (!themeContextGlobal) {
    throw new Error('Header must be used within a ThemeContext provider');
  }

  const { theme, setTheme } = themeContextGlobal;

  return { theme, setTheme } as const;
};
