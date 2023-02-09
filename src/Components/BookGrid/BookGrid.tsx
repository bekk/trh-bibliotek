import classNames from 'classnames';
import { BooksDTO } from '~/DTO';
import { Book } from '../Book/Book';
import styles from './BookGrid.module.scss';

type BookGridProps = {
  books: BooksDTO[];
  className?: string;
};

export function BookGrid({ className, books }: BookGridProps) {
  return (
    <div className={classNames(className, styles.bookGrid)}>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
}
