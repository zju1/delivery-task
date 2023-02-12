import { useContext } from 'react';
import { AppContext } from '../app/context/AppContext';

export function useApp() {
  const app = useContext(AppContext);
  return app;
}
