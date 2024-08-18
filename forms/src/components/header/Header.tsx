import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1>React Forms</h1>
      <div>
        <ul>
          <li>
            <Link to="/uncontrolled">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/controlled">Controlled Form</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
