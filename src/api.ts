import { BooksDTO } from '~/DTO';
import { AIRTABLE_TABLE_ID, BIBLIOTEK } from '~/index';

export function getBooks(): BooksDTO[] {
  const books: BooksDTO[] = [];
  BIBLIOTEK(AIRTABLE_TABLE_ID)
    .select()
    .all()
    .then((records) => {
      records.forEach(function (record) {
        const book: BooksDTO = record._rawJson.fields;
        books.push(book);
      });
    });
  return books;
}
