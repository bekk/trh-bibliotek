import { BookDTO, UserDTO } from '~/DTO';
import { AIRTABLE_TABLE_ID, AIRTABLE_TABLE_ID_USERS, BIBLIOTEK } from '~/index';
import { BooksAT } from '~/types';

export async function getBooks(): Promise<BookDTO[]> {
  const records = await BIBLIOTEK(AIRTABLE_TABLE_ID).select().all();
  return records.map((record) => {
    return { ...record.fields, id: record._rawJson.id, patch: record.patchUpdate };
  });
}

export async function getBooksRaw(): Promise<BooksAT[]> {
  const records = await BIBLIOTEK(AIRTABLE_TABLE_ID).select().all();
  console.log(records);

  return records as unknown as BooksAT[];
}

export async function getUsers(): Promise<UserDTO[]> {
  const records = await BIBLIOTEK(AIRTABLE_TABLE_ID_USERS).select().all();
  return records.map((record) => {
    return { ...record.fields, id: record._rawJson.id };
  });
}

export function updateBook(bookId: string, book: Partial<BookDTO>): Promise<unknown> {
  delete book['id'];
  delete book['Låntetakere'];
  const data = { id: bookId, fields: book };
  const record = BIBLIOTEK(AIRTABLE_TABLE_ID).update([data]);
  return record;
}

export async function borrow(bookId: string, book: Partial<BookDTO>, user: Partial<UserDTO>): Promise<unknown> {
  const names = book.Låntetakere ?? [];

  const name = user.Name ?? '';
  const newBook: Partial<BookDTO> = {
    ...book,
    Låntetakere: [...names, name],
  };
  return updateBook(bookId, newBook);
}
