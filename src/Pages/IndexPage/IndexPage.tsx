import { Link, Page } from '~/Components';
import { ROUTES } from '~/routes';
import styles from './IndexPage.module.scss';

export function IndexPage() {
  return (
    <Page>
      <h1>Trondheim bibliotek</h1>

      <div className={styles.linkWrapper}>
        <Link className={styles.linkBox} url={ROUTES.overview}>
          Bøker
        </Link>
        <Link className={styles.linkBox} url={ROUTES.users}>
          Brukere
        </Link>
      </div>
    </Page>
  );
}
