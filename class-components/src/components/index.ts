import { InputSearch } from './topsection/InputSearch';
import { ResultSearch } from './mainsection/ResultSearch';

interface Animal {
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
  name: string;
  uid: string;
}

export { InputSearch, ResultSearch };
export type { Animal };
