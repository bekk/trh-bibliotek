import { BooksDTO } from '~/DTO';
import { AIRTABLE_TABLE_ID, BIBLIOTEK } from '~/index';

export function getBooks(): Promise<BooksDTO[]> {
  return BIBLIOTEK(AIRTABLE_TABLE_ID)
    .select()
    .all()
    .then((records) => {
      return records.map((record) => record._rawJson.fields);
    });
}
