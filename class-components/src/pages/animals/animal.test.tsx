import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Animals } from './Animals';
import userEvent from '@testing-library/user-event';
import { NotFound } from '../notfound/NotFound';

describe('Smoke Test: run app', () => {
  test('Page is not found', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>,
    );
    expect(await screen.findByRole('heading', { name: '404 - Not Found' })).toBeInTheDocument();
  });

  test('Header is visible', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Animals />} />
        </Routes>
      </BrowserRouter>,
    );
    expect(await screen.findByRole('heading', { name: 'Animals' })).toBeInTheDocument();
  });

  test('User can open PDP', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Animals />} />
        </Routes>
      </BrowserRouter>,
    );
    expect(await screen.findByRole('heading', { name: 'Animals' })).toBeInTheDocument();
    const usernameInput = await screen.findByRole('textbox');
    expect(usernameInput).toBeInTheDocument();
    await userEvent.type(usernameInput, 'sa');
    await userEvent.click(await screen.findByText('Search'));

    await waitFor(() => expect(usernameInput).toBeInTheDocument());
    await waitFor(() => expect(usernameInput).toHaveValue('sa'));

    const pageLastButton = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'button' && content === '2';
    });
    await userEvent.click(pageLastButton);
    const firstCardItem = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && content === 'Altarian marsupial';
    });

    await waitFor(() => expect(firstCardItem).toBeInTheDocument());

    await userEvent.click(firstCardItem);
  });
});
