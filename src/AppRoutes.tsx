import { Route, Routes } from 'react-router-dom';
import { BooksOverviewPage, HealthPage, IndexPage, UserOverviewPage } from '~/Pages';
import { ROUTES } from './routes';

export function AppRoutes() {
  // Must be called within <BrowserRouter> because it uses hook useLocation().

  return (
    <Routes>
      <Route path={ROUTES.index} element={<IndexPage />} />
      <Route path={ROUTES.overview} element={<BooksOverviewPage />} />
      <Route path={ROUTES.users} element={<UserOverviewPage />} />
      <Route path={ROUTES.health} element={<HealthPage />} />
    </Routes>
  );
}
