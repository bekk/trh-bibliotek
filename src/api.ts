import { BooksDTO, UserDTO } from '~/DTO';
import { AIRTABLE_TABLE_ID, AIRTABLE_TABLE_ID_USERS, BIBLIOTEK } from '~/index';

export function getBooks(): Promise<BooksDTO[]> {
  return BIBLIOTEK(AIRTABLE_TABLE_ID)
    .select()
    .all()
    .then((records) => {
      return records.map((record) => {
        return { ...record._rawJson.fields, id: record._rawJson.id };
      });
    });
}

export function getUsers(): Promise<UserDTO[]> {
  return BIBLIOTEK(AIRTABLE_TABLE_ID_USERS)
    .select()
    .all()
    .then((records) => {
      return records.map((record) => {
        return { ...record._rawJson.fields, id: record._rawJson.id };
      });
    });
}
