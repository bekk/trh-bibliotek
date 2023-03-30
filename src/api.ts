import { BookDTO, UserDTO } from '~/DTO';
import { AIRTABLE_TABLE_ID, AIRTABLE_TABLE_ID_USERS, BIBLIOTEK } from '~/index';

export async function getBooks(): Promise<BookDTO[]> {
  const records = await BIBLIOTEK(AIRTABLE_TABLE_ID).select().all();
  return records.map((record) => {
    return { ...record._rawJson.fields, id: record._rawJson.id };
  });
}

export async function getUsers(): Promise<UserDTO[]> {
  const records = await BIBLIOTEK(AIRTABLE_TABLE_ID_USERS).select().all();
  return records.map((record) => {
    return { ...record._rawJson.fields, id: record._rawJson.id };
  });
}
