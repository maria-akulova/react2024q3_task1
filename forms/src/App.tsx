import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from 'pages/main/Main';
import UncontrolledFormPage from 'pages/uncontrolledFormPage/UncontrolledFormPage';
import ControlledFormPage from 'pages/controlledFormPage/ControlledFormPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/uncontrolled" element={<UncontrolledFormPage />} />
        <Route path="/controlled" element={<ControlledFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
