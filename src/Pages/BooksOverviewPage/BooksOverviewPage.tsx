import { useEffect, useState } from 'react';
import { getBooks } from '~/api';
import { Page } from '~/Components';
import { BookGrid } from '~/Components/BookGrid';
import { BookDTO } from '~/DTO';
import { mockedBooks } from '~/Pages/BooksOverviewPage/data';

export function BooksOverviewPage() {
  const [books, setBooks] = useState<BookDTO[]>(mockedBooks);
  const [isMocked, setisMocked] = useState(true);
  const btnText = isMocked ? 'Hent ekte data' : 'Bruk mocked data';

  useEffect(() => {
    if (isMocked) {
      setBooks(mockedBooks);
      return;
    }
    getBooks().then(setBooks);
  }, [isMocked]);

  return (
    <Page>
      <h1>Bøker:</h1>

      <button onClick={() => setisMocked(!isMocked)}>{btnText}</button>
      <div>{books.length}</div>
      <BookGrid books={books} />
    </Page>
  );
}
