import { screen, waitFor } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { AnimalDetails } from './AnimalDetails';
import { animals } from 'utils/utils.data';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { customRender } from 'src/tests/CustomRender';

const mockFetch = vi.fn();
globalThis.fetch = mockFetch as typeof fetch;

describe('Product Details Page', () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });
  const animalAvian = Object.values(animals)[0];
  let id = animalAvian.uid;
  const initialEntries = [`/details/${id}`];

  mockFetch.mockResolvedValue(
    new Response(
      JSON.stringify({
        animal: animalAvian,
      }),
      { status: 200 },
    ),
  );

  const TestComponent = () => {
    return (
      <Routes>
        <Route path="details/:id" element={<AnimalDetails />} />
      </Routes>
    );
  };

  test('fetches and displays item details', async () => {
    customRender(<TestComponent />, { initialEntries });

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByText(animalAvian.name)).toBeInTheDocument());
    expect(screen.getByText('Close')).toBeInTheDocument();
    await userEvent.click(await screen.findByText('Close'));
    expect(screen.queryByText(animalAvian.name)).not.toBeInTheDocument();
  });

  test('Message within PDP if animal id is absent', async () => {
    id = 'uknown';
    customRender(<TestComponent />, { initialEntries });

    expect(screen.findAllByText('No animal details available.')).toBeInTheDocument;
  });
});
