import { BooksDTO } from '~/DTO';

type BookProps = {
  book: BooksDTO;
  className?: string;
};

export function Book({ className, book }: BookProps) {
  return <div className={className}>{book?.title}</div>;
}
