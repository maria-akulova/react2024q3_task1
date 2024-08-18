import React from 'react';
import { Link } from 'react-router-dom';
import { ControlledForm } from 'components/index';

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
