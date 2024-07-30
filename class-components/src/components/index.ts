import { Search } from './search/Search';
import { AnimalList } from './animallist/AnimalList';
import { Spinner } from './spinner/Spinner';
import ErrorBoundary from './errorboundary/ErrorBoundary';
import { AnimalDetails } from './details/AnimalDetails';
import { Pagination } from './pagination/Pagination';

interface Animal {
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
  name: string;
  uid: string;
  checked?: boolean;
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

export {
  Search as InputSearch,
  AnimalList as ResultSearch,
  Spinner,
  ErrorBoundary,
  AnimalDetails,
  Pagination,
};
export type { Animal };
