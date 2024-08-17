import ErrorBoundary from './errorboundary/ErrorBoundary';
import { Header } from './header/Header';
import { ControlledForm } from './_controlled/form/ControlledForm';
import { UncontrolledForm } from './_uncotrolled/form/UncontrolledForm';

import { InputText as InputTextC } from './_controlled/inputs/text/InputText';
import { InputNumber as InputNumberC } from './_controlled/inputs/number/InputNumber';
import { InputRadio as InputRadioC } from './_controlled/inputs/radio/InputRadio';

import { InputText as InputTextU } from './_uncotrolled/inputs/inputText/InputText';
import { InputNumber as InputNumberU } from './_uncotrolled/inputs/number/InputNumber';
import { InputRadio as InputRadioU } from './_uncotrolled/inputs/radio/InputRadio';

interface FormValues {
  id?: string;
  name: string;
  age: number;
  email: string;
  gender?: string;
}

interface FormErrors {
  [key: string]: string | number;
}

const EmptyFormValues = {
  name: '',
  age: 0,
  email: '',
  gender: 'male',
};

export {
  ErrorBoundary,
  Header,
  ControlledForm,
  UncontrolledForm,
  EmptyFormValues,
  InputTextU,
  InputNumberU,
  InputRadioU,
  InputTextC,
  InputNumberC,
  InputRadioC,
};
export type { FormValues, FormErrors };
