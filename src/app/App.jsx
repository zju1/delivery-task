import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './context';
import { appRoutes } from './routes';

export function App() {
  return (
    <AppProvider>
      <RouterProvider router={appRoutes} />
    </AppProvider>
  );
}
