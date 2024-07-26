import { ThemeContext, ThemeContextType } from 'src/context/ThemeContext';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';
import { Header } from 'src/components/header/Header';

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialEntries?: MemoryRouterProps['initialEntries'];
  theme?: ThemeContextType;
}

export const customRender = (ui: ReactElement, options?: IExtendedRenderOptions): RenderResult => {
  const defaultTheme: ThemeContextType = {
    theme: 'light',
    setTheme: vi.fn(),
  };

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <ThemeContext.Provider value={options?.theme ?? defaultTheme}>
        <Header />
        <MemoryRouter initialEntries={options?.initialEntries ?? ['/*']}>{children}</MemoryRouter>
      </ThemeContext.Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { customRender as render };
