import { Route, Routes } from 'react-router-dom';
import { HealthPage } from '~/Pages';
import { ROUTES } from './routes';

export function AppRoutes() {
  // Must be called within <BrowserRouter> because it uses hook useLocation().

  return (
    <Routes>
      <Route path={ROUTES.frontend.index} element={<HealthPage />} />
    </Routes>
  );
}
