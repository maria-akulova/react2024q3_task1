import { InputSearch } from './topsection/InputSearch';
import { ResultSearch } from './mainsection/ResultSearch';
import { Spinner } from './spinner/Spinner';

interface Animal {
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
  name: string;
  uid: string;
}

export { InputSearch, ResultSearch, Spinner };
export type { Animal };
