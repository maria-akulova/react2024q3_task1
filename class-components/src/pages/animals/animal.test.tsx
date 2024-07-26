import { describe, expect, test } from 'vitest';
import { fireEvent, logDOM, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Route, Routes } from 'react-router-dom';
import { Animals } from './Animals';
import userEvent from '@testing-library/user-event';
import { NotFound } from '../notfound/NotFound';
import { AnimalDetails } from 'src/components';
import { customRender } from 'src/tests/CustomRender';

describe('Smoke Test: run app', () => {
  const initialEntries = ['/page/:id'];
  const TestComponent = () => {
    return (
      <Routes>
        <Route path="/page/:id" element={<Animals />}>
          <Route path="details/:id" element={<AnimalDetails />} />
        </Route>
      </Routes>
    );
  };

  test('Page is not found', async () => {
    customRender(
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>,
    );
    expect(await screen.findByRole('heading', { name: '404 - Not Found' })).toBeInTheDocument();
  });

  test('User can open PDP', async () => {
    customRender(<TestComponent />, { initialEntries });

    const usernameInput = await screen.getByRole('textbox');
    expect(usernameInput).toBeInTheDocument();
    await fireEvent.change(usernameInput, { target: { value: 'sa' } });
    logDOM(usernameInput);

    await userEvent.click(await screen.findByText('Search'));

    await waitFor(() => expect(usernameInput).toBeInTheDocument());
    await waitFor(() => expect(screen.getByDisplayValue('sa')).toBeInTheDocument);

    const pageLastButton = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'button' && content === '2';
    });
    await userEvent.click(pageLastButton);
    const firstCardItem = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && content === 'Lycosa tarantula';
    });

    await waitFor(() => expect(firstCardItem).toBeInTheDocument());

    await userEvent.click(firstCardItem);

    const pdp = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && content.includes('ANMA0000026477');
    });

    await waitFor(() => expect(pdp).toBeInTheDocument());
    logDOM(pdp);

    const closePDP = await screen.findByText('Close');
    logDOM(closePDP);

    expect(closePDP).toBeInTheDocument();
    userEvent.click(closePDP);
  });
});
