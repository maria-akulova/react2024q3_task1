import ErrorBoundary from './errorboundary/ErrorBoundary';
import { Header } from './header/Header';
import { ControlledForm } from './controlledForm/ControlledForm';
import { UncontrolledForm } from './uncontrolledForm/UncontrolledForm';
import { InputText as InputTextC } from './inputsControlled/inputText/InputText';
import { InputNumber as InputNumberC } from './inputsControlled/inputNumber/InputNumber';
import { InputText as InputTextU } from './inputsUncontrolled/inputText/InputText';
import { InputNumber as InputNumberU } from './inputsUncontrolled/inputNumber/InputNumber';
interface FormValues {
  id?: string;
  name: string;
  age: number;
  email: string;
}

interface FormErrors {
  [key: string]: string | number;
}

const EmptyFormValues = {
  name: '',
  age: 0,
  email: '',
};

export {
  ErrorBoundary,
  Header,
  ControlledForm,
  UncontrolledForm,
  EmptyFormValues,
  InputTextC,
  InputTextU,
  InputNumberC,
  InputNumberU,
};
export type { FormValues, FormErrors };
