import { BIBLIOTEK } from '~/index';

const recordId = 'receAD1TDjjfgFZe2';
const books = 'tblAwYVtCDnHuCoOJ';
const view = 'viwCePCmr5htvJz1X';

export function getData(): void {
  // return BIBLIOTEK(AIRTABLE_TABLE_ID).find(recordId);
}

export function getBooks(): void {
  let asdf = [];

  const allBooks = BIBLIOTEK(books)
    .select({
      view: view,
    })
    .all((records) => records.foreach((record) => asdf.push(record.get('title'))));

  console.log(asdf);
}
