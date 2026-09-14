import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AnimalDetails } from './AnimalDetails';
import { animals } from 'utils/utils.data';
import { userEvent } from '@testing-library/user-event';

const mockFetch = vi.fn();
globalThis.fetch = mockFetch as typeof fetch;

describe('Product Details Page', () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  test('fetches and displays item details', async () => {
    const animalAvian = Object.values(animals)[0];
    mockFetch.mockResolvedValue(
      new Response(
        JSON.stringify({
          animal: animalAvian,
        }),
        { status: 200 },
      ),
    );

    const id = animalAvian.uid;

    render(
      <MemoryRouter initialEntries={[`/details/${id}`]}>
        <Routes>
          <Route path="details/:id" element={<AnimalDetails />} />
        </Routes>
      </MemoryRouter>,
    );
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByText(animalAvian.name)).toBeInTheDocument());
    expect(screen.getByText('Close')).toBeInTheDocument();
    await userEvent.click(await screen.findByText('Close'));
    expect(screen.queryByText(animalAvian.name)).not.toBeInTheDocument();
  });
});
