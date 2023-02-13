import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export function AppLayout() {
  return (
    <>
      <div
        style={{ marginBottom: '100px', background: 'var(--secondary-color)' }}
      >
        <Outlet />
        <Header />
      </div>
    </>
  );
}
