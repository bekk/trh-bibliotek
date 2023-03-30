import { Link, Page } from '~/Components';
import { ROUTES } from '~/routes';

export function IndexPage() {
  return (
    <Page>
      <h1>Trondheim bibliotek</h1>

      <Link url={ROUTES.overview}>Bøker</Link>
      <Link url={ROUTES.users}>Brukere</Link>
    </Page>
  );
}
