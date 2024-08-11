import { describe, expect, test } from 'vitest';
import { logDOM, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Route, Routes } from 'react-router-dom';
import { Animals } from './Animals';
import userEvent from '@testing-library/user-event';
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

  test('User can see Flyout', async () => {
    customRender(<TestComponent />, { initialEntries });

    const allCheckboxes = await screen.findAllByRole('checkbox');
    const firstCheckbox = allCheckboxes[0];
    const secondCheckbox = allCheckboxes[1];

    userEvent.click(firstCheckbox);
    expect(await screen.findByText('1 item is selected')).toBeInTheDocument();
    userEvent.click(secondCheckbox);
    const flyout = await screen.findByText('2 items are selected');
    expect(flyout).toBeInTheDocument();
    logDOM(flyout);
    const download = await screen.findByText('Download');
    expect(download).toBeInTheDocument();
    userEvent.click(download);
  });
});
