import { useEffect, useState } from 'react';
import { getBooks } from '~/api';
import { BookGrid } from '~/Components/BookGrid';
import { BooksDTO } from '~/DTO';

export function BooksOverviewPage() {
  const [books, setBooks] = useState<BooksDTO[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div>
      <h1>Bøker:</h1>
      {books.length}
      <BookGrid books={books} />
    </div>
  );
}
