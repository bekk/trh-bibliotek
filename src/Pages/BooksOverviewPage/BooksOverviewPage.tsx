import { useState } from 'react';
import { Page } from '~/Components';
import { BookGrid } from '~/Components/BookGrid';
import { BookDTO } from '~/DTO';
import { mockedBooks } from '~/Pages/BooksOverviewPage/data';

export function BooksOverviewPage() {
  const [books, setBooks] = useState<BookDTO[]>(mockedBooks);

  // useEffect(() => {
  //   getBooks().then(setBooks);
  // }, []);

  return (
    <Page>
      <h1>Bøker:</h1>

      {books.length}
      <BookGrid books={books} />
    </Page>
  );
}
