import { BIBLIOTEK } from '~/index';

export function getData(): void {
  const recordId = 'receAD1TDjjfgFZe2';
  const books = 'tblAwYVtCDnHuCoOJ';
  const view = 'viwCePCmr5htvJz1X';
  console.log(BIBLIOTEK(books).find(recordId));

  console.log(BIBLIOTEK(books).select({ maxRecords: 3, view: view }));

  // return BIBLIOTEK(AIRTABLE_TABLE_ID).find(recordId);
}
