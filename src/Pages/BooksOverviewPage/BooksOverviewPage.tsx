import { useEffect } from 'react';
import { getBooks } from '~/api';

export function BooksOverviewPage() {
  useEffect(() => {
    const books = getBooks();
    console.log(books);
  }, []);

  return <span data-cy="health">Bøker kommer her</span>;
}
