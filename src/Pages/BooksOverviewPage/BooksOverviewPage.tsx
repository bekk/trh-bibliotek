import { useEffect, useState } from 'react';
import { getBooks } from '~/api';
import { Book } from '~/Components';
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
      {books.map((book, i) => (
        <Book key={i} book={book} />
      ))}
    </div>
  );
}
