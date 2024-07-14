import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Animals } from './pages/animals/Animals';
import { NotFound } from './pages/notfound/NotFound';
import './App.css';
import { AnimalDetails } from './components/details/AnimalDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Animals />}>
          <Route path="details/:id" element={<AnimalDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
