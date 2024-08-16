import ErrorBoundary from './errorboundary/ErrorBoundary';
import { Header } from './header/Header';
import { ControlledForm } from './controlledForm/ControlledForm';
import { UncontrolledForm } from './uncontrolledForm/UncontrolledForm';
interface FormValues {
  id?: string;
  name: string;
  age: number;
}

interface FormErrors {
  [key: string]: string | number;
}

const EmptyFormValues = {
  name: '',
  age: 0,
};

export { ErrorBoundary, Header, ControlledForm, UncontrolledForm, EmptyFormValues };
export type { FormValues, FormErrors };
