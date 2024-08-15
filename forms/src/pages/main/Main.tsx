// src/pages/Main.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  const uncontrolledData = useSelector((state: RootState) => state.form.uncontrolledFormData);
  const controlledData = useSelector((state: RootState) => state.form.controlledFormData);

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link to="/uncontrolled">Uncontrolled Form</Link>
        </li>
        <li>
          <Link to="/controlled">Controlled Form (React Hook Form)</Link>
        </li>
      </ul>

      <div>
        <h2>Form Data</h2>
        <div>
          <h3>Uncontrolled Form Data:</h3>
          {uncontrolledData ? (
            <p>
              Name: {uncontrolledData.name}, Age: {uncontrolledData.age}
            </p>
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
        <div>
          <h3>Controlled Form Data:</h3>
          {controlledData ? (
            <p>
              Name: {controlledData.name}, Age: {controlledData.age}
            </p>
          ) : (
            <p>No data submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
