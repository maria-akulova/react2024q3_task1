import { act, fireEvent, logDOM, screen, waitFor } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { animals } from 'utils/utils.data';
import { customRender } from 'src/tests/CustomRender';
import { Animal, Flyout } from '..';
import { cleanCounter, increment } from 'src/features/counter/counterSlice';
import { store } from 'src/store';
import { animalAdded, cleanAnimals } from 'src/features/animals/animalSlice';
import * as helperUtils from 'src/utils/HelperString';

describe('Flyout', () => {
  const animalList: Animal[] = Object.values(animals).slice(0, 2);
  const initialEntries = [`/page/1`];
  console.log(initialEntries);

  beforeEach(() => {
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(animalAdded(animalList[0]));
    store.dispatch(animalAdded(animalList[1]));
  });

  afterEach(() => {
    store.dispatch(cleanCounter());
    store.dispatch(cleanAnimals());
  });

  const TestComponent = () => {
    return (
      <Routes>
        <Route path="/page/:id" element={<Flyout animals={animalList} />}></Route>
      </Routes>
    );
  };

  test('Click on Unselect All button', async () => {
    customRender(<TestComponent />, { initialEntries, store: { store } });
    expect(screen.getByText('2 items are selected')).toBeInTheDocument();

    const unselectAll = await screen.findByText('Unselect all');
    expect(unselectAll).toBeInTheDocument();
    logDOM(unselectAll);
    await act(async () => {
      fireEvent.click(unselectAll);
    });
    await waitFor(() => {
      expect(screen.queryByText('2 items are selected')).not.toBeInTheDocument();
    });
  });

  vi.mock('src/utils/HelperString', () => {
    return {
      ...vi.importActual('src/utils/HelperString'),
      downloadCSV: vi.fn((_, downloadLinkRef) => {
        const downloadLink = downloadLinkRef.current;
        if (downloadLink) {
          downloadLink.click = vi.fn(() => {
            console.log('Download canceled.');
          });
        }
      }),
      trunc: vi.fn(),
      getAnimalType: vi.fn(),
      restrictNumberAnimals: vi.fn(),
    };
  });

  test('Click on Download button', async () => {
    customRender(<TestComponent />, { initialEntries });

    const download = await screen.findByText('Download');
    expect(download).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(download);
    });

    expect(helperUtils.downloadCSV).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.queryByText('Download')).toBeInTheDocument();
    });
  });
});
