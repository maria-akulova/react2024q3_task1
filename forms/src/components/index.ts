import ErrorBoundary from './errorboundary/ErrorBoundary';
import { Header } from './header/Header';
import { ControlledForm } from './controlledForm/ControlledForm';
import { UncontrolledForm } from './uncontrolledForm/UncontrolledForm';
interface FormValues {
  id?: string;
  name: string;
  age: number;
}

export { ErrorBoundary, Header, ControlledForm, UncontrolledForm };
export type { FormValues };
