import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Animals } from 'pages/animals/Animals';
import { NotFound } from 'pages/notfound/NotFound';
import './App.css';
import { AnimalDetails } from 'components/index';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/page/:id" element={<Animals />}>
          <Route path="details/:id" element={<AnimalDetails />} />
        </Route>
        <Route path="/*" element={<Animals />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
