import ErrorBoundary from './errorboundary/ErrorBoundary';
interface FormValues {
  id?: string;
  name: string;
  age: number;
}

export { ErrorBoundary };
export type { FormValues };
