import { Outlet } from 'react-router-dom';
import { BottomNavigation } from './BottomNavigation';

export function AppLayout() {
  return (
    <div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
}
