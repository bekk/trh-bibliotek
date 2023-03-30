import { Link } from '~/Components/Link';
import { ROUTES } from '~/routes';

export function Navbar() {
  return (
    <div>
      <Link url={ROUTES.index}>Hjem</Link>
      <Link url={ROUTES.users}>Brukere</Link>
      <Link url={ROUTES.overview}>Bøker</Link>
      <Link url={ROUTES.health}>Health</Link>
    </div>
  );
}
