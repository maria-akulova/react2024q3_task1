import { render, screen } from '@testing-library/react';
import { ThemeContext } from 'src/context/ThemeContext';
import { Header } from './Header';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  const TestComponent = () => {
    return (
      <ThemeContext.Provider value={{ theme: 'light', setTheme: vi.fn() }}>
        <Header />
      </ThemeContext.Provider>
    );
  };

  test('Header is visible', async () => {
    render(<TestComponent />);
    expect(screen.getByRole('heading', { name: 'Animals' })).toBeInTheDocument();
  });

  test('Change Theme', async () => {
    render(<TestComponent />);

    expect(screen.getByTestId('theme-checkbox')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('theme-dark'));
    await userEvent.click(screen.getByTestId('theme-light'));
  });

  test('Error if ThemeContext is absent', () => {
    const renderHeaderWithoutContext = () => render(<Header />);

    expect(renderHeaderWithoutContext).toThrowError(
      'Header must be used within a ThemeContext provider',
    );
  });
});
