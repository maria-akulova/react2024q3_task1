import React from 'react';
import { UncontrolledForm } from 'components/index';
import { Link } from 'react-router-dom';

const UncontrolledFormPage: React.FC = () => {
  return (
    <div>
      <div className="header">
        <h1>Uncontrolled Form</h1>
        <Link to="/">Main Form</Link>
      </div>{' '}
      <UncontrolledForm />
    </div>
  );
};

export default UncontrolledFormPage;
