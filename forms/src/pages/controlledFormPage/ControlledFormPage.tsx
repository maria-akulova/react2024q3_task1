import React from 'react';
import { ControlledForm } from 'components/controlledForm/ControlledForm';
import { Link } from 'react-router-dom';

const ControlledFormPage: React.FC = () => {
  return (
    <div>
      <div className="header">
        <h1>Controlled Form</h1>
        <Link to="/">Main Form</Link>
      </div>
      <ControlledForm />
    </div>
  );
};

export default ControlledFormPage;
