import { useEffect, useMemo, useState } from 'react';
import { getBooks } from '~/api';
import { Page } from '~/Components';
import { BookGrid } from '~/Components/BookGrid';
import { BookDTO } from '~/DTO';
import { mockedBooks } from '~/Pages/BooksOverviewPage/data';

export function BooksOverviewPage() {
  const [books, setBooks] = useState<BookDTO[]>(mockedBooks);
  // const [books2, setBooks2] = useState<ATRecords>([]);
  const [isMocked, setisMocked] = useState(true);
  const btnToggleMockedText = isMocked ? 'Hent ekte data' : 'Bruk mocked data';

  const sortedBooks = useMemo(() => books.sort((a, b) => a?.title?.localeCompare(b?.title ?? '') ?? 0), [books]);

  useEffect(() => {
    if (isMocked) {
      setBooks(mockedBooks);
      return;
    }
    getBooks().then(setBooks);
    // getBooksRaw().then(setBooks2);
  }, [isMocked]);

  return (
    <Page>
      <h1>Bøker:</h1>

      {/* <button onClick={() => books2[0].patchUpdate({ antall: 100 }).then(console.log).catch(console.error)}>
        Set 100
      </button> */}

      <button onClick={() => setisMocked(!isMocked)}>{btnToggleMockedText}</button>
      <div>{books.length}</div>
      <BookGrid books={sortedBooks} />
      {/* <BookGrid books={books2} /> */}
    </Page>
  );
}
