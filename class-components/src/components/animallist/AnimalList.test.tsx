import { logDOM, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { animals } from 'utils/utils.data';
import { vi } from 'vitest';
import { customRender } from 'src/tests/CustomRender';
import { AnimalList } from './AnimalList';
import { Animal } from '..';

describe('Result List of animals', () => {
  const animalList: Animal[] = Object.values(animals);
  const initialEntries = [`/page/1`];
  console.log(initialEntries);

  const TestComponent = () => {
    return (
      <Routes>
        <Route
          path="/page/:id"
          element={<AnimalList animals={animalList} onItemClick={vi.fn()} activeAnimalId={null} />}
        ></Route>
      </Routes>
    );
  };

  test('User can see the Animal List', async () => {
    customRender(<TestComponent />, { initialEntries });

    const allCheckboxes = await screen.findAllByRole('checkbox');
    const firstCheckbox = allCheckboxes[0];
    expect(firstCheckbox).toBeInTheDocument();
    const inputElement = screen.getByText('avian');
    expect(inputElement).toBeInTheDocument();

    logDOM();
  });
});
