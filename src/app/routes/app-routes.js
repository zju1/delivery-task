import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../features';
import { AppLayout } from '../../layout';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);
