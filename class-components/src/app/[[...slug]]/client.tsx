'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'src/components';
import { store } from 'src/store';

const App = dynamic(() => import('../../App'), { ssr: false });

export function ClientOnly() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  );
}
