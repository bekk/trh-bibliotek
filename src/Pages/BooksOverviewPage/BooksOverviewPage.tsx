import { getBooks } from "~/api";

export function BooksOverviewPage() {
  
  getBooks();
  return <span data-cy="health">Bøker kommer her</span>;
}
