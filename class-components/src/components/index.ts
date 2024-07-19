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

interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export interface SearchResult {
  page: Page;
  animals: Animal[];
}

export { InputSearch, ResultSearch, Spinner, ErrorBoundary };
export type { Animal };
