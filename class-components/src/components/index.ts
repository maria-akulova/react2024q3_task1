import { InputSearch } from './topsection/InputSearch';
import { ResultSearch } from './mainsection/ResultSearch';
import { Spinner } from './spinner/Spinner';
import ErrorBoundary from './errorboundary/ErrorBoundary';

interface Animal {
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
  name: string;
  uid: string;
}

export { InputSearch, ResultSearch, Spinner, ErrorBoundary };
export type { Animal };
