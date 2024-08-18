import ErrorBoundary from './errorboundary/ErrorBoundary';
import { Header } from './header/Header';
import { ControlledForm } from './_controlled/form/ControlledForm';
import { UncontrolledForm } from './_uncotrolled/form/UncontrolledForm';

import { InputText as InputTextC } from './_controlled/inputs/text/InputText';
import { InputNumber as InputNumberC } from './_controlled/inputs/number/InputNumber';
import { InputRadio as InputRadioC } from './_controlled/inputs/radio/InputRadio';
import { InputCheckbox as InputCheckboxC } from './_controlled/inputs/checkbox/InputCheckbox';
import { InputFile as InputFileC } from './_controlled/inputs/file/InputFile';
import { Password as PasswordC } from './_controlled/password/Password';
import { PasswordConfirmed as PasswordConfirmedC } from './_controlled/password/PasswordComfirmed';
import { Country as CountryC } from './_controlled/country/Country';

import { InputText as InputTextU } from './_uncotrolled/inputs/inputText/InputText';
import { InputNumber as InputNumberU } from './_uncotrolled/inputs/number/InputNumber';
import { InputRadio as InputRadioU } from './_uncotrolled/inputs/radio/InputRadio';
import { InputCheckbox as InputCheckboxU } from './_uncotrolled/inputs/checkbox/InputCheckbox';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputFile as InputFileU } from './_uncotrolled/inputs/file/InputFile';
import { Password as PasswordU } from './_uncotrolled/password/Password';
import { PasswordConfirmed as PasswordConfirmedU } from './_uncotrolled/password/PasswordComfirmed';
import { Country as CountryU } from './_uncotrolled/country/Country';

interface FormValues {
  id?: string;
  name: string;
  age: number;
  email: string;
  gender?: string;
  terms?: boolean;
  photo: string | FileList;
  password: string;
  confirmPassword: string;
  country: string;
}

interface FormErrors {
  [key: string]: string | number | boolean;
}

const EmptyFormValues = {
  name: '',
  age: 0,
  email: '',
  gender: 'male',
  terms: false,
  photo: '',
  password: '',
  confirmPassword: '',
  country: '',
};

interface InputCommonPropsU {
  id: keyof FormValues;
  nameRef: React.RefObject<HTMLInputElement>;
  errors: FormErrors;
}
interface InputCommonPropsC {
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export {
  ErrorBoundary,
  Header,
  ControlledForm,
  UncontrolledForm,
  EmptyFormValues,
  InputTextU,
  InputNumberU,
  InputRadioU,
  InputCheckboxU,
  InputFileU,
  PasswordU,
  PasswordConfirmedU,
  CountryU,
  InputTextC,
  InputNumberC,
  InputRadioC,
  InputCheckboxC,
  InputFileC,
  PasswordC,
  PasswordConfirmedC,
  CountryC,
};
export type { FormValues, FormErrors, InputCommonPropsU, InputCommonPropsC };
