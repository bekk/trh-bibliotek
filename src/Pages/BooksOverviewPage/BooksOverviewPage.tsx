import { Autocomplete, TextField } from '@mui/material';
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
      <Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        options={['banan', 'eple']}
      />
      {books.length}
      <BookGrid books={books} />
    </div>
  );
}
