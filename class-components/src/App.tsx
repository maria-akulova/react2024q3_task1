import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Animals } from 'pages/animals/Animals';
import { NotFound } from 'pages/notfound/NotFound';
import './App.css';
import { AnimalDetails } from 'components/index';
import { Header } from 'components/header/Header';
import { ThemeContext } from 'src/context/ThemeContext';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Routes>
          <Route path="/page/:id" element={<Animals />}>
            <Route path="details/:id" element={<AnimalDetails />} />
          </Route>
          <Route path="/*" element={<Animals />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
